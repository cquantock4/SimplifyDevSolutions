'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      {/* Navbar */}
      <div className="navbar bg-base-200 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Simplify Dev Solutions</a>
        </div>
        <div className="flex-none gap-2">
          <a href="#about" className="btn btn-ghost">About</a>
          <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-6 p-10 text-center md:text-left">
        <img
          src="/profile_image.png"
          alt="Profile"
          className="aspect-square object-cover w-32 md:w-65 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 -translate-y-2"
        />
        <div>
          <h1 className="text-5xl font-bold">Simplify Dev Solutions</h1>
          <h3 className="text-2xl">Data Integration, Automation and Custom Software</h3>
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-10">
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h3 className="card-title">About Me</h3>
            <p className="mt-2 text-lg">
              We help lawfirms, businesses and non-profits like yours streamline operations and improve efficiency through custom software solutions.<br /> Whether you need data integration, automation, or a full custom development, I can help.
            </p>
            <p>

              I specialize in creating tools that streamline your firm's operations—from integrations to full custom development. Let's build systems that work *with* your team, not against them.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="p-10">
        <div className="card bg-base-200 shadow-xl max-w-xl mx-auto">
          <div className="card-body space-y-4">
            <h3 className="card-title">Contact Me</h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);

                const response = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    subject: formData.get("subject"),
                    message: formData.get("message"),
                  }),
                });

                if (response.ok) {
                  alert("Message sent!");
                  form.reset();
                } else {
                  alert("Message failed.");
                }
              }}
              className="flex flex-col space-y-4"
            >
              <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" required />
              <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
              <input name="subject" type="text" placeholder="Subject" className="input input-bordered w-full" />
              <textarea name="message" placeholder="Your Message" className="textarea textarea-bordered w-full h-24" required />
              <button type="submit" className="btn btn-primary w-full">Send</button>
            </form>
          </div>
        </div>
      </section>


      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>&copy; 2025 Simplify Dev Solutions</div>
      </footer>
    </main>
  );
}