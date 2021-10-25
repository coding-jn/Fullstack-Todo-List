var done = document.getElementsByClassName("fa-square");
var clearAll = document.getElementById('clearAll')
var allItems = document.getElementsByClassName('item')

Array.from(done).forEach(function(element) {
    element.addEventListener('click', function(){
        const item = this.parentNode.parentNode.childNodes[3].innerText
        fetch('items', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'item': item
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

clearAll.addEventListener('click', function(){
    Array.from(allItems).forEach(function(element) {
        const item = element.childNodes[3].innerText
        fetch('items', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'item': item
          })
        }).then(function (response) {
          window.location.reload()
        })
    });
});



