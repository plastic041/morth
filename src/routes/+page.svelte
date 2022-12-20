<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.products as product}
	<h3>{product.title}</h3>
	<p>{product.description}</p>
{/each}
