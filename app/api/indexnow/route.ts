import { NextResponse } from "next/server"
import crypto from "crypto" // Built-in Node.js module

export async function POST(request: Request) {
  const HOST = "blog.mdazlaanzubair.com"
  const INDEXNOW_KEY = "a64401c9e8424bc78345c2daed87ecb7"

  try {
    // 1. Get the raw string text and Hashnode signature header
    const rawBody = await request.text()
    const signature = request.headers.get("x-hashnode-signature")
    const secret = process.env.HASHNODE_WEBHOOK_SECRET

    if (!signature || !secret) {
      return NextResponse.json(
        { error: "Missing security credentials" },
        { status: 401 }
      )
    }

    // 2. Compute and verify the signature hash
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex")

    if (signature !== expectedSignature) {
      return NextResponse.json(
        { error: "Invalid security signature" },
        { status: 401 }
      )
    }

    // 3. Now safely parse the body since the request is verified
    const body = JSON.parse(rawBody)

    // 4. Verify this event is a published post from Hashnode
    if (body.eventType !== "post_published" || !body.data?.post) {
      return NextResponse.json(
        { message: "Ignored unrelated event" },
        { status: 200 }
      )
    }

    // 5. Extract the absolute URL of your new Hashnode post
    const postUrl = body.data.post.url

    if (!postUrl) {
      return NextResponse.json({ error: "No post URL found" }, { status: 400 })
    }

    // 6. Prepare the IndexNow protocol payload
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: [postUrl],
    }

    // 7. Fire the ping to IndexNow
    const response = await fetch("https://indexnow.org", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: `Indexed: ${postUrl}`,
      })
    } else {
      const errorText = await response.text()
      return NextResponse.json(
        { success: false, error: errorText },
        { status: response.status }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal Error" },
      { status: 500 }
    )
  }
}
