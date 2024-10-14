import { Button } from "@nextui-org/react";

function NewsletterSection() {
  return (
    <section className="relative w-dvw flex justify-center items-center py-10 bg-slate-100 dark:bg-slate-900">
      <div className="w-[90%] lg:w-[85%] xl:[80%] grid grid-cols-1 md:grid-cols-2 items-center gap-10 xl:gap-16 my-20">
        <div className="flex flex-col gap-5 xl:gap-10">
          <p className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Stay Informed with Early Updates!
          </p>
          <p className="text-base text-dark-text">
            Subscribe to our newsletter and receive the latest updates and
            important news directly to your inbox.
          </p>
        </div>
        <div className="flex justify-center md:px-10">
          <div class="w-full mb-6">
            <label
              for="name"
              class="mb-1 block font-heading text-base text-dark dark:text-white"
            >
              Email Address
            </label>
            <div className="flex gap-3 flex-nowrap items-end">
              <input
                type="email"
                id="name"
                placeholder="Your Email Address"
                class="w-full border-b bg-transparent py-3 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                name="name"
              />
              <Button className="bg-primary rounded text-white min-w-fit">
                <i className="bi bi-send-fill"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
