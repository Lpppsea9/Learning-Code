import { reactive, onMounted, onUnmounted } from "vue";
function useMousePsition2() {
	const state = reactive({
		x: 0,
		y: 0,
	});
	// const x = ref(0);
	// const y = ref(0);

	function update(e) {
		state.x = e.pageX;
		state.y = e.pageY;
	}

	onMounted(() => {
		console.log("useMousePosition mounted");
		window.addEventListener("mousemove", update);
	});

	onUnmounted(() => {
		console.log("useMousePosition onUnmounted");
		window.addEventListener("mousemove", update);
	});

	return state;
}

export default useMousePsition2;
