const integrationContainer = document.querySelector('#integration-container');
const integrationCategory = document.querySelector('#integration-category');
const selectedTab = integrationCategory.getAttribute('data-selected');
let connectors = [];
let allServices = [];

function sortServicesByName(services) {
  return services.sort((a, b) => a.name.localeCompare(b.name));
}

const filterServices = (connectorCategory) => {
  let filteredServices = allServices;
  const selectedConnectorCategory = connectors.find(
    (connector) => connector.connector === connectorCategory
  );

  if (selectedConnectorCategory) {
    filteredServices = selectedConnectorCategory.services;
  }

  const connectorsElement = sortServicesByName(filteredServices)
    .map((service) => {
      return `<div
                  class="col-lg-2 col-md-3 col-sm-4 mb-4 text-center"
                  data-aos="fade-up"
                >
                  <a
                    href="${service.href ?? '#'}"
                    target="_blank"
                  >
                    <img
                      src="${service.src}"
                      class="media-img mb-2"
                      alt="${service.alt}"
                      loading="lazy"
                    />
                    <h5>${service.name}</h5>
                  </a>
                </div>`;
    })
    .join('');

  integrationContainer.innerHTML = connectorsElement;
};

// IIFE to fetch the connectors
(async () => {
  const connectorCategories = ['All connectors'];
  const res = await fetch('./js/connectors.json');

  // set the connectors data
  connectors = await res.json();

  // set the all services data
  allServices = connectors.reduce((acc, { connector, services }) => {
    connectorCategories.push(connector);
    return [...acc, ...services];
  }, []);

  const categoryElement = connectorCategories
    .map((category) => {
      return `<div class="col-12 py-2 mr-2 ${
        selectedTab === category ? 'selected-connector-category' : ''
      }" role="button" data-tab="${category}">
       <h5 data-tab="${category}">${category}</h5>
      </div>`;
    })
    .join('');

  filterServices();

  integrationCategory.innerHTML = categoryElement;
})();

// handle filtering of services on click
integrationCategory.addEventListener('click', (e) => {
  const tabs = Array.from(integrationCategory.children);
  const currentTab = e.target?.getAttribute('data-tab');
  tabs.forEach((tab) => {
    const tabValue = tab.getAttribute('data-tab');
    if (tabValue === currentTab) {
      tab.classList.add('selected-connector-category');
    } else {
      tab.classList.remove('selected-connector-category');
    }
  });
  integrationCategory.setAttribute('data-selected', currentTab);
  filterServices(currentTab);
});
