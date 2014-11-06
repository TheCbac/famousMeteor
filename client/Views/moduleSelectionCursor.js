// Copied from https://github.com/zol/meteor-famous-leaderboard/blob/master/client/cursor-to-array.js
// Observes changes on a cursor and updates the data array inplace
moduleSelectionCursor = function(cursor, slidingDrawerView) {
  cursor.observe({
    addedAt: function(document, atIndex, before) {
      slidingDrawerView.addModule(document);
    },
    changedAt: function(newDocument, oldDocument, atIndex) {
      // ensure the fragment createFn returns is re-active
    },
    removedAt: function(oldDocument, atIndex) {

    },
    movedTo: function(document, fromIndex, toIndex, before) {

    }
  });
};