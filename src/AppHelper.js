helper = {
    setNewsFeedView: function  () {
        var newsFeedViewContainer = document.getElementById("amityAmpasNewsFeedContainer");
        var groupViewContainer = document.getElementById("amityAmpasGroupContainer");
        // hide group view and load/show news feed view
        if (groupViewContainer) {
            groupViewContainer.classList.add("hidden");
        }
        if (newsFeedViewContainer) {
            newsFeedViewContainer.classList.remove("hidden");
        }
    },
    setGroupView: function () {
        var newsFeedViewContainer = document.getElementById("amityAmpasNewsFeedContainer");
        var groupViewContainer = document.getElementById("amityAmpasGroupContainer");
        // hide news feed view and load/show group view
        if (newsFeedViewContainer) {
            newsFeedViewContainer.classList.add("hidden");
        }
        if (groupViewContainer) {
            groupViewContainer.classList.remove("hidden");
        }
    }
}