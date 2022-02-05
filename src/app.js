import './styles/main.scss';
import '@hybridxweb/copyright-x/dist/copyright-x';

const offerings = document.querySelector('#offerings');

const offers = [
    {
        icon: 'fa-box-open',
        title: 'Corrugated boxes',
        statement: 'For packaging and shipment with single colour flexo printing.'
    },
    {
        icon: 'fa-truck-loading',
        title: 'Duplex boxes',
        statement: 'For products with offset printing and lamination.'
    },
    {
        icon: 'fa-scroll',
        title: 'Corrugated sheets',
        statement: 'for partitioning and other purposes'
    },
    {
        icon: 'fa-toilet-paper',
        title: 'Corrugated rolls',
        statement: 'For cushioning and packaging of fragile products.'
    },
    {
        icon: 'fa-box',
        title: 'Custom made solutions',
        statement: 'For branding, packaging and shipment of your product folio.',
    }
];

if (offerings) {
    offerings.innerHTML = offers.map(
        (offer) => {
            return `<div class="row">
            <div class="col-1">
              <i class="fas ${offer.icon} fa-lg indigo-text"></i>
            </div>
            <div class="col-xl-10 col-md-11 col-10">
              <h5 class="font-weight-bold mb-3">${offer.title}</h5>
              <p class="grey-text">${offer.statement}</p>
            </div>
          </div>`;
        }
    ).join('');
}
