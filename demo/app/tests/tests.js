var TimelineView = require("nativescript-timeline-view").TimelineView;
var timelineView = new TimelineView();

describe("greet function", function() {
    it("exists", function() {
        expect(timelineView.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(timelineView.greet()).toEqual("Hello, NS");
    });
});