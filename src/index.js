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
var mainNavigation = document.getElementById('mainNav');

/**
 * add CSS selectors
 */
function addLevelSelectors(nav) {
  var level1 = nav.querySelectorAll('ul ul');
  level1.forEach(function(level) {
    level.parentNode.setAttribute('class', 'isParent');
  });
  var level2 = nav.querySelectorAll('li > ul');
  //console.log(level2)

  // levels.forEach(function(level) {
  //   //console.log(level.parentNode.querySelector('a'));
  //   //var checkRelation = level.parentNode.querySelector('a');
  //   console.log(levels)
  // });
}

/**
 * create view all link from parent categories
 */
function createViewAllLink(nav) {
  var subNavs = nav.querySelectorAll('ul ul');
  subNavs.forEach(function(subNav) {
    // get parent link
    var parentLink = subNav.parentNode.querySelector('a');

    // create parent clone
    var parentLinkCopy = parentLink.cloneNode(true);

    // modify parent clone text
    var parentLinkCopyText = 'View All ' + parentLink.text;
    parentLinkCopy.textContent = parentLinkCopyText;

    // create viewAllLink from parent clone
    var viewAllLink = document.createElement('li');
    viewAllLink.appendChild(parentLinkCopy);

    // insert viewAllLink as first subNav
    subNav.insertBefore(viewAllLink, subNav.firstChild);

    // remove href value from parent subNavs
    parentLink.setAttribute('href', '');
    parentLink.setAttribute('onClick', '');

    return;
  });
  return;
}

createViewAllLink(mainNavigation);
addLevelSelectors(mainNavigation);
