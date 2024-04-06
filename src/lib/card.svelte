<script lang="ts">
  export let title: string;
  export let order: number;
</script>

<article
  class="flex gap-6 flex-col items-center md:flex-row lg:flex-col lg:gap-[3.5rem]"
>
  <div
    aria-hidden="true"
    class="font-serif text-xl w-12 h-12 border rounded-full grid place-items-center font-semibold text-neutral-800 border-neutral-800 grow-0 shrink-0 lg:w-[3.5rem] lg:h-[3.5rem]"
  >
    {order}
  </div>
  <div class="text-center md:text-left lg:text-center">
    <h2 class="heading-sm text-neutral-800">{title}</h2>
    <p class="body-md text-neutral-600 mt-4 lg:text-center lg:mt-7"><slot /></p>
  </div>
</article>
