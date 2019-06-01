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
function addNavLevelSelectors(nav) {
  // var level1 = document.querySelectorAll('nav > ul > li > a');
  // var level2 = document.querySelectorAll('nav ul ul a');
  // var level3 = document.querySelectorAll('nav ul ul ul a');
  var parentCategories = nav.querySelectorAll('li ul');

  // level1.forEach(function(subNav) {
  //   subNav.classList.add('nav__lvl-1');
  // });
  // level2.forEach(function(subNav) {
  //   subNav.classList.add('nav__lvl-2');
  // });
  // level3.forEach(function(subNav) {
  //   subNav.classList.add('nav__lvl-3');
  // });

  parentCategories.forEach(function(category) {
    if (category.parentNode) {
    } else if (category.children) {
    }
  });
}

/**
 * create view all link from parent categories
 */
function createViewAllLink(nav) {
  var subNavs = nav.querySelectorAll('ul ul');
  subNavs.forEach(function(subNav) {
    // get parent subNav
    var parentLink = subNav.parentNode.children[0];

    // create clone
    var parentLinkCopy = parentLink.cloneNode(true);

    // update clone text
    var parentLinkCopyText = 'View All ' + parentLink.text;
    parentLinkCopy.textContent = parentLinkCopyText;

    // create viewAllLink
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
addNavLevelSelectors(mainNavigation);
