import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, interest, message } = body
    
    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: 'Name, email, and interest are required' },
        { status: 400 }
      )
    }
    
    const { data, error } = await supabase
      .from('real_estate_leads')
      .insert({
        name,
        email,
        phone,
        interest,
        message,
        source: 'website',
        status: 'new'
      })
      .select()
      .single()
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Thank you! Tony & Laura will contact you within 24 hours.'
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
