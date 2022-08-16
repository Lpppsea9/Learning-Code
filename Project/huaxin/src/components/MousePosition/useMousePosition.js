import { ref, onMounted, onUnmounted } from "vue";
function useMousePsition() {
	const x = ref(0);
	const y = ref(0);

	function update(e) {
		x.value = e.pageX;
		y.value = e.pageY;
	}

	onMounted(() => {
		console.log("useMousePosition mounted");
		window.addEventListener("mousemove", update);
	});

	onUnmounted(() => {
		console.log("useMousePosition onUnmounted");
		window.addEventListener("mousemove", update);
	});

	return {
		x,
		y,
	};
}

export default useMousePsition;
