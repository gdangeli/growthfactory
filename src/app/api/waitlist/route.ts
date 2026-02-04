import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // Check if already registered
    const { data: existing } = await supabase
      .from('growthfactory_waitlist')
      .select('id')
      .eq('email', email.toLowerCase())
      .single();

    if (existing) {
      return NextResponse.json(
        { message: 'Du bist bereits auf der Warteliste!' },
        { status: 200 }
      );
    }

    // Insert new entry
    const { error } = await supabase
      .from('growthfactory_waitlist')
      .insert({
        email: email.toLowerCase(),
        created_at: new Date().toISOString(),
      });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Fehler beim Speichern. Bitte versuche es später.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Erfolgreich! Du bist auf der Warteliste.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Server-Fehler' },
      { status: 500 }
    );
  }
}
