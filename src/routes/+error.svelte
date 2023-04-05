<script lang="ts">
    import { page } from '$app/stores';
  </script>
<div class="w-full h-full flex">
    {#if $page}
    <h1 class="m-auto">{$page.status}: {$page.error?.message ?? 'No error'}</h1>
    {/if}
</div>