<script>
	import "../app.postcss";

	import Header from "$lib/component/header.svelte";
	import Footer from "$lib/component/footer.svelte";
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
