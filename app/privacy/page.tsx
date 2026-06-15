import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div>
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold mb-4">Privacy Policy & Terms of Service</h1>
          <p className="text-blue-100 text-xl">Last updated: April 28, 2026</p>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-10 text-gray-600">
          <div>
            <h2 className="text-2xl font-bold text-brand-900 mb-4">Privacy Policy</h2>
            <p>JFA Property LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or submit a form to receive a cash offer.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">Information We Collect</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (phone number, email address)</li>
              <li>Property address and details</li>
              <li>Information you voluntarily provide in forms</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prepare and deliver your cash offer</li>
              <li>Contact you about your property and our services</li>
              <li>Send SMS messages regarding your cash offer request, property updates, and closing coordination</li>
              <li>Send marketing SMS messages if you have opted in</li>
              <li>Improve our services</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">SMS Communications</h3>
            <p>By submitting our form and checking the consent box, you agree to receive SMS text messages from JFA Property LLC. Message frequency may vary. Standard message and data rates may apply.</p>
            <p className="mt-2">To opt out of SMS messages at any time, reply <strong>STOP</strong> to any message we send you. For help, reply <strong>HELP</strong> or contact us at jfaproperty@gmail.com.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">Information Sharing</h3>
            <p>We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or to trusted partners who assist us in operating our business.</p>
            <p className="mt-2"><strong>Mobile/SMS opt-in data and consent will not be shared with any third parties or affiliates for marketing/promotional purposes.</strong></p>
            <p className="mt-2"><strong>SMS consent is not shared with third parties except service providers used solely to deliver messages.</strong></p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">Data Security</h3>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">Your Rights</h3>
            <p>You have the right to request access to, correction of, or deletion of your personal information. Contact us at jfaproperty@gmail.com to exercise these rights.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">Contact Us</h3>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <div className="mt-2">
              <p><strong>JFA Property LLC</strong></p>
              <p>Phone: (210) 319-9323</p>
              <p>Email: jfaproperty@gmail.com</p>
              <p>Serving all of Texas</p>
            </div>
          </div>
          <div id="terms">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">Terms of Service</h2>
            <p>Last updated: April 28, 2026</p>
            <p className="mt-2">By accessing or using our website and services, including SMS communications, you agree to these Terms of Service.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">1. SMS Program Description</h3>
            <p>JFA Property LLC offers SMS messaging programs that may include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Account notifications</li>
              <li>Customer support communications</li>
              <li>Appointment reminders</li>
              <li>Promotional offers and updates (where consent is provided)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">2. Opt-In & Opt-Out</h3>
            <p>By opting into our SMS program, you agree to receive text messages as described above.</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Opt-Out:</strong> Reply STOP at any time to unsubscribe.</li>
              <li><strong>Help:</strong> Reply HELP or contact: jfaproperty@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">3. Message Frequency & Costs</h3>
            <p>Message frequency may vary. Message and data rates may apply depending on your carrier plan.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">4. Carrier Disclaimer</h3>
            <p>Wireless carriers are not liable for delayed or undelivered messages.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">5. Eligibility (18+)</h3>
            <p>You must be at least 18 years old to participate in our SMS programs.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">6. Customer Support</h3>
            <p>For SMS-related support, contact:</p>
            <p className="mt-2">Email: jfaproperty@gmail.com</p>
            <p>Phone: (210) 319-9323</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">7. Privacy Policy</h3>
            <p>Your participation in our SMS program is subject to our Privacy Policy. By opting in, you agree to the collection and use of information as described therein.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">8. Modifications</h3>
            <p>We reserve the right to modify these Terms at any time. Continued use of the services constitutes acceptance of updated Terms.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">9. Governing Law</h3>
            <p>These Terms are governed by the laws of the United States.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">10. General Terms</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>This website is operated by JFA Property LLC</li>
              <li>Submitting a form does not obligate you to sell your property</li>
              <li>We reserve the right to decline to make an offer on any property</li>
              <li>All offers are subject to property inspection and verification</li>
              <li>We are not a real estate brokerage and do not charge commissions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}