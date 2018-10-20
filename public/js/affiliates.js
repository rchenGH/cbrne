$(document).ready(function() {

  let affiliates = [
    {
      name: "Trilogy Systems Limited",
      site: "https://www.trilogy-systems.net",
      location: "Canada, Northern/Eastern Africa, Gulf Cooperation Council Countries"
    },
    {
      name: "MNS Equipment Solutions",
      site: "https://www.mnsequipment.com/",
      location: "Canada and Global"
    },
    {
      name: "Latoplast - Forcefield",
      site: "https://www.latoplast.com/",
      location: "Canada"
    },
    {
      name: "SpillTech",
      site: "https://www.spilltech.com/",
      location: "USA"
    },
    {
      name: "Caribbean Safety Products",
      site: "http://caribbeansafety.com/",
      location: "Caribbean & South America"
    },
    {
      name: "Nero Oils and Gas Nigeria Limited",
      site: "http://www.nerooils.com/",
      location: "Northern/Western and Middle Africa"
    },
    {
      name: "Paradigm Environmental",
      site: "http://paradigmenergysolutions.com/",
      location: "Nigeria"
    },
    {
      name: "Basic Nigeria Technology Limited",
      site: "http://basicng.com/",
      location: "Nigeria"
    },
    {
      name: "Response Resource Management",
      site: "http://www.responseresourcemanagement.com.au/",
      location: "Australia"
    },
    {
      name: "Absorb Environmental",
      site: "https://absorbenviro.com.au/",
      location: "Australia and South East Asia"
    },
    {
      name: "Kaltrade Private Limited",
      site: "http://www.kaltrade.co.zw/",
      location: "Zimbabwe - South Africa"
    },
    {
      name: "Vikoma",
      site: "https://www.vikoma.com/",
      location: "United Kingdom and Global"
    },
    {
      name: "Rocky Mountain Environmental",
      site: "http://spilldepot.com/",
      location: "Canada"
    },
    {
      name: "Global Spill Response",
      site: "https://www.globalspillandcontainment.com/",
      location: "USA"
    },
    {
      name: "FreightPlus - Air, Land & Sea Logistics",
      site: "http://freightplus.com/freightplus-canada/",
      location: "Global"
    }

  ]


  for(let i=0; i<affiliates.length; i++){

    $("#affiliate-section").append(
      `
        <a href="${affiliates[i].site}" class="affiliate-a column-4">
          <div class="affiliate-card">
            <p class="name">${affiliates[i].name}</p>
            <p class="location">${affiliates[i].location}</p>
          </div>
        </a>
      `

  )
  }

})
