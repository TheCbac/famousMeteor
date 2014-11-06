// Copied from https://github.com/zol/meteor-famous-leaderboard/blob/master/client/cursor-to-array.js
// Observes changes on a cursor and updates the data array inplace
cursorToArray = function(cursor, diagramView, moduleSelectionView, appView) {
  cursor.observe({
    addedAt: function(document, atIndex, before) {
      moduleSelectionView.addModule(document);
      appView.addModifierListener(document.name, appView);
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