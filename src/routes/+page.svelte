<script>
  import Card from "$lib/card.svelte";
</script>

<header class="relative">
  <div
    class="bg-neutral-800 absolute w-full h-[30.125rem] md:h-[33.75rem] z-[-2] radius-pattern"
  ></div>
  <img
    src="/images/bg-pattern-1.svg"
    class="hidden md:block md:absolute md:top-[4.5rem] md:left-[-14.25rem] z-[-1]"
    alt=""
  />
  <img
    src="/images/bg-pattern-2.svg"
    class="hidden md:block md:absolute md:top-[15.625rem] md:right-[-5.875rem] z-[-1]"
    alt=""
  />
  <nav class="w-layout-md mx-auto pt-8">
    <ul class="flex items-center justify-between">
      <li>
        <a href="/" aria-label="Home">
          <img src="/images/logo-light.svg" alt="" />
        </a>
      </li>
      <li>
        <a
          href="/"
          class="block font-sans text-base leading-loose border-b-[3px] border-primary-700 text-neutral-25 hover:text-primary-700 font-bold"
          >Apply for access
        </a>
      </li>
    </ul>
  </nav>
  <div class="w-layout-md mx-auto mt-16 flex flex-col items-center">
    <div class="flex flex-col items-center">
      <h1 class="heading-lg text-neutral-25 text-center md:w-[31.25rem]">
        Data <strong
          class="font-semibold underline underline-offset-4 decoration-primary-700 decoration-[.1875rem]"
          >tailored</strong
        > to your needs.
      </h1>

      <a href="/" class="mt-10 btn-primary">Learn More</a>
    </div>
    <img
      src="/images/image-hero.webp"
      class="w-[20rem] mr-[.1875rem] md:w-[32.125rem] mt-16"
      alt=""
    />
  </div>
</header>
<main>
  <div class="relative pt-16 pb-[4.5rem]">
    <div
      class="bg-neutral-100 absolute w-full z-[-3] radius-pattern left-0 top-[-20rem] bottom-0"
    ></div>
    <ol class="w-layout-md mx-auto grid gap-10">
      <li>
        <Card title="Actionable insights" order={1}
          >Optimize your products, improve customer satisfaction and stay ahead
          of the competition with our product data analytics.
        </Card>
      </li>
      <li>
        <Card order={2} title="Data-driven decisions">
          Make data-driven decisions with our product data analytics. Our
          AI-generated reports help you unlock insights hidden in your product
          data.
        </Card>
      </li>
      <li>
        <Card order={3} title="Always affordable">
          Always affordable pricing that scales with your business. Get
          top-quality product data analytics services without hidden costs or
          unexpected fees.
        </Card>
      </li>
    </ol>
  </div>
  <div class="mt-[6.25rem] w-layout-md md:w-[43rem] mx-auto flex flex-col">
    <div
      class="w-[81.924198250728862974%] aspect-square rounded-full bg-primary-700 self-center md:w-[17.5625rem] md:self-start"
    ></div>
    <section
      class="relative bg-neutral-800 text-neutral-25 p-8 mt-[-3.3125rem] flex flex-col md:w-[32.125rem] md:self-end md:mt-[-8.125rem] md:pt-12 md:pb-[3.5rem] md:px-[3.5rem]"
    >
      <h2 class="heading-md text-center md:text-left">Be the first to test</h2>
      <p class="body-md text-center mt-4 md:text-left">
        Hi, I'm Louis Graham, the founder of the company. Book a demo call with
        me to become a beta tester for our app and kickstart your company. Apply
        for access below and I’ll be in touch to schedule a call.
      </p>
      <a href="/" class="mt-6 btn-primary self-center md:self-start"
        >Learn More</a
      >
      <img
        src="/images/bg-pattern-3.svg"
        class="hidden md:block md:absolute md:bottom-[-6.5rem] md:right-[.75rem]"
        alt=""
      />
    </section>
  </div>
</main>
<footer class="flex flex-col items-center gap-14 mt-[4.625rem] mb-16 md:mt-20">
  <a href="/" aria-label="Home" class="w-fit">
    <img src="/images/logo-dark.svg" alt="" />
  </a>
  <ul class="flex items-center gap-7 justify-center">
    <li>
      <a href="/" class="icon-social-media facebook" aria-label="Facebook"></a>
    </li>
    <li>
      <a href="/" class="icon-social-media twitter" aria-label="Twitter"></a>
    </li>
    <li>
      <a href="/" class="icon-social-media instagram" aria-label="Instagram"
      ></a>
    </li>
  </ul>
</footer>
