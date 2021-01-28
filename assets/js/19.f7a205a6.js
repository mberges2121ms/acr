(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{393:function(e,t,o){"use strict";o.r(t);var r=o(42),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"how-to-use-a-custom-domain-for-azure-container-registry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-a-custom-domain-for-azure-container-registry"}},[e._v("#")]),e._v(" How to use a custom domain for azure container registry")]),e._v(" "),o("p",[e._v("Azure Container registries has a typical login url of the format "),o("code",[e._v("*.azurecr.io")]),e._v(". A customer might like to have a custom domain that associate with its own organization. The following is the guide on how to achieve that.")]),e._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("p",[e._v("For this example, we suppose that you want to associate "),o("code",[e._v("registry.contoso.com")]),e._v(" with a Azure Container Registry. You would need the following:")]),e._v(" "),o("ul",[o("li",[e._v("Setup your organization's DNS zone "),o("code",[e._v(".contoso.com")]),e._v(". To create one on Azure, you can follow "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/dns/dns-getstarted-create-dnszone-portal",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("SSL certificate for "),o("code",[e._v("registry.contoso.com")]),e._v(", we would call it "),o("code",[e._v("contoso.pfx")]),e._v(". Put the password of the certificate to a file named "),o("code",[e._v("pwd.txt")]),e._v(". You would optionally also need your signing CA certificate's URL, such as "),o("code",[e._v("http://www.contoso.com/pki/ca.cert")])]),e._v(" "),o("li",[e._v("An instance of Azure Container Registry service as the backend. In this example we would assume it's "),o("code",[e._v("docker-registry-contoso.azurecr.io")])])]),e._v(" "),o("h2",{attrs:{id:"steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),o("h3",{attrs:{id:"upload-your-cert-into-azure-key-vault"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-your-cert-into-azure-key-vault"}},[e._v("#")]),e._v(" Upload your cert into Azure Key Vault")]),e._v(" "),o("p",[e._v("Under "),o("RouterLink",{attrs:{to:"/custom-domain/deprecated/key-vault-setup/"}},[e._v("key-vault-setup/")]),e._v(", run the following:")],1),e._v(" "),o("ol",[o("li",[o("p",[e._v("(Optional) Create an Azure Key Vault, if you don't already have one:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v(" `.\\ensure-vault.ps1 -subscriptionName <subscription> -resourceGroupName <resourceGroup> -vaultName <new VaultName>`\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Upload "),o("code",[e._v("contoso.pfx")]),e._v(" to Azure Key Vault:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v(" `.\\upload-cert.ps1 -pfxFilePath <pfxFile> -pfxPwFile <pwdFile> -secretName <new SecretName> -vaultName <vaultName>`\n")])])])])]),e._v(" "),o("h3",{attrs:{id:"deploy-and-configure-an-nginx-docker-image-on-a-new-azure-vm"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-and-configure-an-nginx-docker-image-on-a-new-azure-vm"}},[e._v("#")]),e._v(" Deploy and configure an Nginx Docker image on a new Azure VM")]),e._v(" "),o("p",[e._v("Deploy via Azure Portal")]),e._v(" "),o("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Facr%2Fmaster%2Fdocs%2Fcustom-domain%2Fdocker-vm-deploy%2Fazuredeploy.json",target:"_blank"}},[o("img",{attrs:{src:"http://azuredeploy.net/deploybutton.png"}})]),e._v(" "),o("a",{attrs:{href:"http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Facr%2Fmaster%2Fdocs%2Fcustom-domain%2Fdocker-vm-deploy%2Fazuredeploy.json",target:"_blank"}},[o("img",{attrs:{src:"http://armviz.io/visualizebutton.png"}})]),e._v(" "),o("p",[e._v("Alternatively, to deploy using powershell script, "),o("RouterLink",{attrs:{to:"/custom-domain/deprecated/docker-vm-deploy/"}},[e._v("docker-vm-deploy/")]),e._v(", do the following:")],1),e._v(" "),o("ol",[o("li",[o("p",[e._v("Edit "),o("a",{attrs:{href:"docker-vm-deploy/azuredeploy.parameters.json"}},[e._v("azuredeploy.parameters.json")]),e._v(" and populate all necessary parameters")])]),e._v(" "),o("li",[o("p",[e._v("Run the following script to create the new VM:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v(" `.\\deploy.ps1 -resourceGroupName <resourceGroup>`\n")])])])])]),e._v(" "),o("h3",{attrs:{id:"configure-dns-zone"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-dns-zone"}},[e._v("#")]),e._v(" Configure DNS zone")]),e._v(" "),o("p",[e._v("Configure the DNS zone so "),o("code",[e._v("registry.contoso.com")]),e._v(" points to the Azure VM you have just created. If you are using an Azure DNS Zone. You can use the following command:")]),e._v(" "),o("p",[o("code",[e._v("New-AzureRmDnsRecordSet -Name <registry> -RecordType CNAME -ZoneName <contoso.com> -ResourceGroupName <resourceGroup> -Ttl <Ttl> -DnsRecords (New-AzureRmDnsRecordConfig -Cname <AddrToAboveVM>)")])]),e._v(" "),o("h2",{attrs:{id:"quick-verification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quick-verification"}},[e._v("#")]),e._v(" Quick verification")]),e._v(" "),o("p",[e._v("A simple way to test the setup is to call "),o("code",[e._v("docker login")]),e._v(" to quickly confirm that the requests are properly forwarded:")]),e._v(" "),o("p",[o("code",[e._v("docker login -u <username> -p <password> registry.contoso.com")])])])}),[],!1,null,null,null);t.default=a.exports}}]);