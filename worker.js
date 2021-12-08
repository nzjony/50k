var i = 0;
function recurse() {
  i++;
  try {
    console.count("here in the ww");
    recurse();
  } catch (e) {
    console.log("stopped at iteration " + i);
  }
}

onmessage = function (e) {
  if (e.data === "start") {
    console.log("starting");
    recurse();
  }
};
