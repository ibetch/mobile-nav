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
    var parentAnchor = subNav.parentNode.children[0];

    // create clone
    var newAnchor = parentAnchor.cloneNode(true);

    // update clone text
    var newAnchorText = 'View All ' + parentAnchor.text;
    newAnchor.textContent = newAnchorText;

    // create viewAllLink
    var viewAllLink = document.createElement('li');
    viewAllLink.appendChild(newAnchor);

    // insert viewAllLink as first subNav
    subNav.insertBefore(viewAllLink, subNav.firstChild);

    // remove href value from parent subNavs
    parentAnchor.setAttribute('href', '');
    parentAnchor.setAttribute('onClick', '');

    return;
  });
  return;
}

createViewAllLink(mainNavigation);
addNavLevelSelectors(mainNavigation);