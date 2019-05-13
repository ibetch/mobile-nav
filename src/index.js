document.getElementById('app').innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/**
 * target all child lists
 */
var childLists = document.querySelectorAll('ul > li > ul');

/**
 * create view all link for all parent list
 */
function createViewAllLink(list) {
  list.forEach(function(item) {
    // get parent item
    var parentAnchor = item.parentNode.children[0];

    // create clone
    var clone = parentAnchor.cloneNode(true);

    // update clone text
    var cloneText = 'View All ' + parentAnchor.text;
    clone.textContent = cloneText;

    // remove href value from parent items
    parentAnchor.setAttribute('href', '');

    // create viewAllLink
    var viewAllLink = document.createElement('li');
    viewAllLink.appendChild(clone);

    // insert viewAllLink as first item
    item.insertBefore(viewAllLink, item.firstChild);

    return;
  });
  return;
}

createViewAllLink(childLists);
