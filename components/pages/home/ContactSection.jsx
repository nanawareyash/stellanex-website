import { Button, Divider, Link } from "@nextui-org/react";

function ContactSection() {
  return (
    <section
      className="relative w-dvw flex justify-center items-center py-10 bg-white dark:bg-slate-950"
      style={{ minHeight: "calc(100svh - 80px)" }}
    >
      <div className="w-[90%] lg:w-[85%] xl:[80%] grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16 my-20">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-5 xl:gap-10">
            <p className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
              Need Help? We&apos;ve Got You Covered!
            </p>
            <p className="text-base text-dark-text">
              Our dedicated support team is here to make things easy for you.
              Choose the way that works best for you:
            </p>
          </div>
          <Divider className="bg-[#2E333D] my-4 hidden md:block" />
          <div className="hidden md:grid grid-cols-3">
            <div className="flex flex-col">
              <label className="mb-2 text-large">Email Address</label>
              <Link
                className="text-base text-dark-text"
                href="mailto://info@stellanex.com"
                target="_blank"
              >
                info@stellanex.com
              </Link>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-large">Phone Number</label>
              <Link
                className="text-base text-dark-text"
                href="tel://+919112256198"
                target="_blank"
              >
                +91 9112 256198
              </Link>
              <Link
                className="text-base text-dark-text"
                href="tel://+918081612827"
                target="_blank"
              >
                +91 8081 612827
              </Link>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-large">Office Location</label>
              <Link
                className="text-base text-dark-text"
                href="https://maps.app.goo.gl/QXGgs44VwbBg8QdT6"
                target="_blank"
              >
                Shree Gajanan Park, Kharjul Mala Road, Nashik Road, Nashik -
                422101
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:px-10">
            <form className="flex flex-col gap-10">
              <div className="grid grid-cols-2 gap-5">
                <div class="mb-6">
                  <label
                    for="name"
                    class="mb-1 block font-heading text-base text-dark dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    class="w-full border-b bg-transparent py-3 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    name="name"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="mb-1 block font-heading text-base text-dark dark:text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    class="w-full border-b bg-transparent py-3 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    name="email"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="phone"
                    class="mb-1 block font-heading text-base text-dark dark:text-white"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    class="w-full border-b bg-transparent py-3 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    name="phone"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="subject"
                    class="mb-1 block font-heading text-base text-dark dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Type Subject"
                    class="w-full border-b bg-transparent py-3 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    name="subject"
                  />
                </div>
                <div class="mb-6 col-span-2">
                  <label
                    for="message"
                    class="mb-1 block font-heading text-base text-dark dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    rows="3"
                    name="message"
                    id="message"
                    placeholder="Type Message"
                    class="w-full resize-none border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                  ></textarea>
                </div>
              </div>
              <div>
                <Button className="flex w-full items-center justify-center rounded bg-primary px-8 py-[14px] font-heading text-base text-white hover:bg-opacity-90">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:hidden">
          <Divider className="bg-[#2E333D] my-4" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5">
            <div className="flex flex-col">
              <label className="mb-2 text-large">Email Address</label>
              <Link
                className="text-base text-dark-text"
                href="mailto://info@stellanex.com"
                target="_blank"
              >
                info@stellanex.com
              </Link>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-large">Phone Number</label>
              <Link
                className="text-base text-dark-text"
                href="tel://+919112256198"
                target="_blank"
              >
                +91 9112 256198
              </Link>
              <Link
                className="text-base text-dark-text"
                href="tel://+918081612827"
                target="_blank"
              >
                +91 8081 612827
              </Link>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-large">Office Location</label>
              <Link
                className="text-base text-dark-text"
                href="https://maps.app.goo.gl/QXGgs44VwbBg8QdT6"
                target="_blank"
              >
                Shree Gajanan Park, Kharjul Mala Road, Nashik Road, Nashik -
                422101
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
