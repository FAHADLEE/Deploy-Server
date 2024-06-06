import axios from 'axios';
import { APIURL } from "../../url";


const apiUrl = APIURL;

export const Organization = async () => {
  try {
    const response = await axios.get(`${apiUrl}/organizationoptions`);
    return response.data;
  } catch{
  }
};
// Customer Type
export const Customertype = [
  {
    Option: "Corporate",
    optionvalue: "corporate",
  },
  {
    Option: "Travels",
    optionvalue: "travels",
  },
  {
    Option: "Gen Customers",
    optionvalue: "gencustomers",
  },
];

//service station


export const Service_Station = [
  {
    Option: "All Station",
    optionvalue: "allstation",
  },
  {
    Option: "Ahmedabad",
    optionvalue: "ahmedabad",
  },
  {
    Option: "Bangalore",
    optionvalue: "bangalore",
  },
  {
    Option: "Chennai",
    optionvalue: "chennai",
  },
  {
    Option: "Coimbatore",
    optionvalue: "coimbatore",
  },
  {
    Option: "Delhi",
    optionvalue: "delhi",
  },
  {
    Option: "Erode",
    optionvalue: "erode",
  },
  {
    Option: "Goa",
    optionvalue: "goa",
  },
  {
    Option: "Hyderabad",
    optionvalue: "hyderabad",
  },
  {
    Option: "Indore",
    optionvalue: "indore",
  },
  {
    Option: "Jaipur",
    optionvalue: "jaipur",
  },
  {
    Option: "Kerala",
    optionvalue: "kerala",
  },
  {
    Option: "Kolkata",
    optionvalue: "kolkata",
  },
  {
    Option: "Lucknow",
    optionvalue: "lucknow",
  },
  {
    Option: "Madurai",
    optionvalue: "madurai",
  },
  {
    Option: "Mangalore",
    optionvalue: "mangalore",
  },
  {
    Option: "Mumbai",
    optionvalue: "mumbai",
  },
  {
    Option: "Nagpur",
    optionvalue: "nagpur",
  },
  {
    Option: "New one",
    optionvalue: "new one",
  },
  {
    Option: "Pune",
    optionvalue: "pune",
  },
  {
    Option: "Tiruchi",
    optionvalue: "tiruchi",
  },
  {
    Option: "Vijayawada",
    optionvalue: "Vijayawada",
  },
];


// Select

export const Select = [
  {
    Option: "Percentage",
    optionvalue: "percentage",
  },
  {
    Option: "Pay Type Percentage",
    optionvalue: "paytypePercentage",
  },
  {
    Option: "Pay Type",
    optionvalue: "paytype",
  },
];


export const UnderGroup = [
  {
    optionvalue: "adityabrila",
    option: "ADITYA BRILA",
  },
  {
    optionvalue: "aequs",
    option: "AEQUS",
  },
  {
    optionvalue: "automotive",
    option: "AUTO MOTIVE",
  },
  {
    optionvalue: "bharathicement",
    option: "BHARATHI CEMENT",
  },
  {
    optionvalue: "checktronix",
    option: "CHECKTRONIX",
  },
  {
    optionvalue: "citec",
    option: "CITEC",
  },
  {
    optionvalue: "cle",
    option: "CLE",
  },
  {
    optionvalue: "counculatedenmark",
    option: "COUNCULTE DEMARK",
  },
  {
    optionvalue: "d.bank",
    option: "D.BANK",
  },
  {
    optionvalue: "david",
    option: "DAVID",
  },
  {
    optionvalue: "deriohealthcare",
    option: "DERIO HEALTHCARE",
  },
  {
    optionvalue: "evoquawater",
    option: "EVOQUA WATER",
  },
  {
    optionvalue: "firefly",
    option: "FIRE FLY",
  },
  {
    optionvalue: "geethanjaliinstitute",
    option: "GEETHANJAILI INSTITUTE",
  },
  {
    optionvalue: "gen",
    option: "GEN",
  },
  {
    optionvalue: "gohypetechnologiespvtltd",
    option: "GOHYPE TECHNOLOIES PVT LTD",
  },
  {
    optionvalue: "hcl",
    option: "HCL",
  },
  {
    optionvalue: "hcl(bangalore)",
    option: "HCL (BANGALORE)",
  },
  {
    optionvalue: "hclcorp",
    option: "HCL CROP",
  },
  {
    optionvalue: "icici",
    option: "ICICI",
  },
  {
    optionvalue: "infosys",
    option: "INFOSYS",
  },
  {
    optionvalue: "knightfrank",
    option: "KNIGHT FRANK",
  },
  {
    optionvalue: "ktsindia",
    option: "KTS INDIA",
  },
  {
    optionvalue: "millward",
    option: "MILL WARD",
  },
  {
    optionvalue: "mr.samdavid",
    option: "MR.SAM DAVID",
  },
  {
    optionvalue: "ncclimited",
    option: "NCC LIMITED",
  },
  {
    optionvalue: "nipponsteel",
    option: "NIPPON STEEL",
  },
  {
    optionvalue: "nisseielectric",
    option: "NISSE ELECTRIC",
  },
  {
    optionvalue: "nskbearings",
    option: "NSK BEARINGS",
  },
  {
    optionvalue: "prodapt",
    option: "PRODAPT",
  },
  {
    optionvalue: "rapid",
    option: "RAPID",
  },
  {
    optionvalue: "rbdshelters",
    option: "RBD SHELTERS",
  },
  {
    optionvalue: "rrd(donnelley)",
    option: "RRD (DONNELLEY)",
  },
  {
    optionvalue: "sadan",
    option: "SADAN",
  },
  {
    optionvalue: "samunnati",
    option: "SAMUNNATI",
  },
  {
    optionvalue: "sharpgarudafarm",
    option: "SHARP GARUDA FARM",
  },
  {
    optionvalue: "shreekrishna",
    option: "SHREE KRISHNA",
  },
  {
    optionvalue: "shriramtransport",
    option: "SHRIRAM TRANSPORT",
  },
  {
    optionvalue: "ssgroups",
    option: "SS GROUPS",
  },
  {
    optionvalue: "tangoit",
    option: "TANGO IT",
  },
  {
    optionvalue: "tvscredit",
    option: "TVS CREDIT",
  },
  {
    optionvalue: "unicornadventures",
    option: "UNICORN ADVETURESS",
  },
  {
    optionvalue: "weworkindia",
    option: "WE WORKINDIA",
  },
];

// States

export const states = [
  {
    state: "Andhra Pradesh",
    statevalue: "andhra_pradesh",
    districts: [
      "Anantapur",
      "Chittoor",
      "East Godavari",
      "Guntur",
      "Krishna",
      "Kurnool",
      "Nellore",
      "Prakasam",
      "Srikakulam",
      "Visakhapatnam",
      "Vizianagaram",
      "West Godavari",
      "YSR Kadapa",
    ],
  },
  {
    state: "Arunachal Pradesh",
    statevalue: "arunachal_pradesh",
    districts: [
      "Tawang",
      "West Kameng",
      "East Kameng",
      "Papum Pare",
      "Kurung Kumey",
      "Kra Daadi",
      "Lower Subansiri",
      "Upper Subansiri",
      "West Siang",
      "East Siang",
      "Siang",
      "Upper Siang",
      "Lower Siang",
      "Lower Dibang Valley",
      "Dibang Valley",
      "Anjaw",
      "Lohit",
      "Namsai",
      "Changlang",
      "Tirap",
      "Longding",
    ],
  },
  {
    state: "Assam",
    statevalue: "assam",
    districts: [
      "Baksa",
      "Barpeta",
      "Biswanath",
      "Bongaigaon",
      "Cachar",
      "Charaideo",
      "Chirang",
      "Darrang",
      "Dhemaji",
      "Dhubri",
      "Dibrugarh",
      "Goalpara",
      "Golaghat",
      "Hailakandi",
      "Hojai",
      "Jorhat",
      "Kamrup Metropolitan",
      "Kamrup",
      "Karbi Anglong",
      "Karimganj",
      "Kokrajhar",
      "Lakhimpur",
      "Majuli",
      "Morigaon",
      "Nagaon",
      "Nalbari",
      "Dima Hasao",
      "Sivasagar",
      "Sonitpur",
      "South Salmara-Mankachar",
      "Tinsukia",
      "Udalguri",
      "West Karbi Anglong",
    ],
  },
  {
    state: "Bihar",
    statevalue: "bihar",
    districts: [
      "Araria",
      "Arwal",
      "Aurangabad",
      "Banka",
      "Begusarai",
      "Bhagalpur",
      "Bhojpur",
      "Buxar",
      "Darbhanga",
      "East Champaran (Motihari)",
      "Gaya",
      "Gopalganj",
      "Jamui",
      "Jehanabad",
      "Kaimur (Bhabua)",
      "Katihar",
      "Khagaria",
      "Kishanganj",
      "Lakhisarai",
      "Madhepura",
      "Madhubani",
      "Munger (Monghyr)",
      "Muzaffarpur",
      "Nalanda",
      "Nawada",
      "Patna",
      "Purnia (Purnea)",
      "Rohtas",
      "Saharsa",
      "Samastipur",
      "Saran",
      "Sheikhpura",
      "Sheohar",
      "Sitamarhi",
      "Siwan",
      "Supaul",
      "Vaishali",
      "West Champaran",
    ],
  },
  {
    state: "Chandigarh (UT)",
    statevalue: "chandigarh_(UT)",
    districts: ["Chandigarh"],
  },
  {
    state: "Chhattisgarh",
    statevalue: "chhattisgarh",
    districts: [
      "Balod",
      "Baloda Bazar",
      "Balrampur",
      "Bastar",
      "Bemetara",
      "Bijapur",
      "Bilaspur",
      "Dantewada (South Bastar)",
      "Dhamtari",
      "Durg",
      "Gariyaband",
      "Janjgir-Champa",
      "Jashpur",
      "Kabirdham (Kawardha)",
      "Kanker (North Bastar)",
      "Kondagaon",
      "Korba",
      "Korea (Koriya)",
      "Mahasamund",
      "Mungeli",
      "Narayanpur",
      "Raigarh",
      "Raipur",
      "Rajnandgaon",
      "Sukma",
      "Surajpur  ",
      "Surguja",
    ],
  },
  {
    state: "Dadra and Nagar Haveli (UT)",
    statevalue: "dadra_and_nagar_haveli_(UT)",
    districts: ["Dadra & Nagar Haveli"],
  },
  {
    state: "Daman and Diu (UT)",
    statevalue: "daman_and_diu_(UT)",
    districts: ["Daman", "Diu"],
  },
  {
    state: "Delhi (NCT)",
    statevalue: "delhi_(NCT)",
    districts: [
      "Central Delhi",
      "East Delhi",
      "New Delhi",
      "North Delhi",
      "North East  Delhi",
      "North West  Delhi",
      "Shahdara",
      "South Delhi",
      "South East Delhi",
      "South West  Delhi",
      "West Delhi",
    ],
  },
  {
    state: "Goa",
    statevalue: "goa",
    districts: ["North Goa", "South Goa"],
  },
  {
    state: "Gujarat",
    districts: [
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Aravalli",
      "Banaskantha (Palanpur)",
      "Bharuch",
      "Bhavnagar",
      "Botad",
      "Chhota Udepur",
      "Dahod",
      "Dangs (Ahwa)",
      "Devbhoomi Dwarka",
      "Gandhinagar",
      "Gir Somnath",
      "Jamnagar",
      "Junagadh",
      "Kachchh",
      "Kheda (Nadiad)",
      "Mahisagar",
      "Mehsana",
      "Morbi",
      "Narmada (Rajpipla)",
      "Navsari",
      "Panchmahal (Godhra)",
      "Patan",
      "Porbandar",
      "Rajkot",
      "Sabarkantha (Himmatnagar)",
      "Surat",
      "Surendranagar",
      "Tapi (Vyara)",
      "Vadodara",
      "Valsad",
    ],
  },
  {
    state: "Haryana",
    statevalue: "haryana",
    districts: [
      "Ambala",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gurgaon",
      "Hisar",
      "Jhajjar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Kurukshetra",
      "Mahendragarh",
      "Mewat",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Rewari",
      "Rohtak",
      "Sirsa",
      "Sonipat",
      "Yamunanagar",
    ],
  },
  {
    state: "Himachal Pradesh",
    statevalue: "himachalpradesh",
    districts: [
      "Bilaspur",
      "Chamba",
      "Hamirpur",
      "Kangra",
      "Kinnaur",
      "Kullu",
      "Lahaul &amp; Spiti",
      "Mandi",
      "Shimla",
      "Sirmaur (Sirmour)",
      "Solan",
      "Una",
    ],
  },
  {
    state: "Jammu and Kashmir",
    statevalue: "jammu_and_kashmir",
    districts: [
      "Anantnag",
      "Bandipore",
      "Baramulla",
      "Budgam",
      "Doda",
      "Ganderbal",
      "Jammu",
      "Kargil",
      "Kathua",
      "Kishtwar",
      "Kulgam",
      "Kupwara",
      "Leh",
      "Poonch",
      "Pulwama",
      "Rajouri",
      "Ramban",
      "Reasi",
      "Samba",
      "Shopian",
      "Srinagar",
      "Udhampur",
    ],
  },
  {
    state: "Jharkhand",
    statevalue: "jharkhand",
    districts: [
      "Bokaro",
      "Chatra",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "East Singhbhum",
      "Garhwa",
      "Giridih",
      "Godda",
      "Gumla",
      "Hazaribag",
      "Jamtara",
      "Khunti",
      "Koderma",
      "Latehar",
      "Lohardaga",
      "Pakur",
      "Palamu",
      "Ramgarh",
      "Ranchi",
      "Sahibganj",
      "Seraikela-Kharsawan",
      "Simdega",
      "West Singhbhum",
    ],
  },
  {
    state: "Karnataka",
    statevalue: "karnataka",
    districts: [
      "Bagalkot",
      "Ballari (Bellary)",
      "Belagavi (Belgaum)",
      "Bengaluru (Bangalore) Rural",
      "Bengaluru (Bangalore) Urban",
      "Bidar",
      "Chamarajanagar",
      "Chikballapur",
      "Chikkamagaluru (Chikmagalur)",
      "Chitradurga",
      "Dakshina Kannada",
      "Davangere",
      "Dharwad",
      "Gadag",
      "Hassan",
      "Haveri",
      "Kalaburagi (Gulbarga)",
      "Kodagu",
      "Kolar",
      "Koppal",
      "Mandya",
      "Mysuru (Mysore)",
      "Raichur",
      "Ramanagara",
      "Shivamogga (Shimoga)",
      "Tumakuru (Tumkur)",
      "Udupi",
      "Uttara Kannada (Karwar)",
      "Vijayapura (Bijapur)",
      "Yadgir",
    ],
  },
  {
    state: "Kerala",
    statevalue: "kerala",
    districts: [
      "Alappuzha",
      "Ernakulam",
      "Idukki",
      "Kannur",
      "Kasaragod",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
      "Pathanamthitta",
      "Thiruvananthapuram",
      "Thrissur",
      "Wayanad",
    ],
  },
  {
    state: "Lakshadweep (UT)",
    statevalue: "lakshadweep_(UT)",
    districts: [
      "Agatti",
      "Amini",
      "Androth",
      "Bithra",
      "Chethlath",
      "Kavaratti",
      "Kadmath",
      "Kalpeni",
      "Kilthan",
      "Minicoy",
    ],
  },
  {
    state: "Madhya Pradesh",
    statevalue: "madhya_pradesh",
    districts: [
      "Agar Malwa",
      "Alirajpur",
      "Anuppur",
      "Ashoknagar",
      "Balaghat",
      "Barwani",
      "Betul",
      "Bhind",
      "Bhopal",
      "Burhanpur",
      "Chhatarpur",
      "Chhindwara",
      "Damoh",
      "Datia",
      "Dewas",
      "Dhar",
      "Dindori",
      "Guna",
      "Gwalior",
      "Harda",
      "Hoshangabad",
      "Indore",
      "Jabalpur",
      "Jhabua",
      "Katni",
      "Khandwa",
      "Khargone",
      "Mandla",
      "Mandsaur",
      "Morena",
      "Narsinghpur",
      "Neemuch",
      "Panna",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rewa",
      "Sagar",
      "Satna",
      "Sehore",
      "Seoni",
      "Shahdol",
      "Shajapur",
      "Sheopur",
      "Shivpuri",
      "Sidhi",
      "Singrauli",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha",
    ],
  },
  {
    state: "Maharashtra",
    statevalue: "maharashtra",
    districts: [
      "Ahmednagar",
      "Akola",
      "Amravati",
      "Aurangabad",
      "Beed",
      "Bhandara",
      "Buldhana",
      "Chandrapur",
      "Dhule",
      "Gadchiroli",
      "Gondia",
      "Hingoli",
      "Jalgaon",
      "Jalna",
      "Kolhapur",
      "Latur",
      "Mumbai City",
      "Mumbai Suburban",
      "Nagpur",
      "Nanded",
      "Nandurbar",
      "Nashik",
      "Osmanabad",
      "Palghar",
      "Parbhani",
      "Pune",
      "Raigad",
      "Ratnagiri",
      "Sangli",
      "Satara",
      "Sindhudurg",
      "Solapur",
      "Thane",
      "Wardha",
      "Washim",
      "Yavatmal",
    ],
  },
  {
    state: "Manipur",
    statevalue: "manipur",
    districts: [
      "Bishnupur",
      "Chandel",
      "Churachandpur",
      "Imphal East",
      "Imphal West",
      "Jiribam",
      "Kakching",
      "Kamjong",
      "Kangpokpi",
      "Noney",
      "Pherzawl",
      "Senapati",
      "Tamenglong",
      "Tengnoupal",
      "Thoubal",
      "Ukhrul",
    ],
  },
  {
    state: "Meghalaya",
    statevalue: "meghalaya",
    districts: [
      "East Garo Hills",
      "East Jaintia Hills",
      "East Khasi Hills",
      "North Garo Hills",
      "Ri Bhoi",
      "South Garo Hills",
      "South West Garo Hills ",
      "South West Khasi Hills",
      "West Garo Hills",
      "West Jaintia Hills",
      "West Khasi Hills",
    ],
  },
  {
    state: "Mizoram",
    statevalue: "mizoram",
    districts: [
      "Aizawl",
      "Champhai",
      "Kolasib",
      "Lawngtlai",
      "Lunglei",
      "Mamit",
      "Saiha",
      "Serchhip",
    ],
  },
  {
    state: "Nagaland",
    statevalue: "nagaland",
    districts: [
      "Dimapur",
      "Kiphire",
      "Kohima",
      "Longleng",
      "Mokokchung",
      "Mon",
      "Peren",
      "Phek",
      "Tuensang",
      "Wokha",
      "Zunheboto",
    ],
  },
  {
    state: "Odisha",
    statevalue: "odisha",
    districts: [
      "Angul",
      "Balangir",
      "Balasore",
      "Bargarh",
      "Bhadrak",
      "Boudh",
      "Cuttack",
      "Deogarh",
      "Dhenkanal",
      "Gajapati",
      "Ganjam",
      "Jagatsinghapur",
      "Jajpur",
      "Jharsuguda",
      "Kalahandi",
      "Kandhamal",
      "Kendrapara",
      "Kendujhar (Keonjhar)",
      "Khordha",
      "Koraput",
      "Malkangiri",
      "Mayurbhanj",
      "Nabarangpur",
      "Nayagarh",
      "Nuapada",
      "Puri",
      "Rayagada",
      "Sambalpur",
      "Sonepur",
      "Sundargarh",
    ],
  },
  {
    state: "Puducherry (UT)",
    statevalue: "puducherry_(UT)",
    districts: ["Karaikal", "Mahe", "Pondicherry", "Yanam"],
  },
  {
    state: "Punjab",
    statevalue: "punjab",
    districts: [
      "Amritsar",
      "Barnala",
      "Bathinda",
      "Faridkot",
      "Fatehgarh Sahib",
      "Fazilka",
      "Ferozepur",
      "Gurdaspur",
      "Hoshiarpur",
      "Jalandhar",
      "Kapurthala",
      "Ludhiana",
      "Mansa",
      "Moga",
      "Muktsar",
      "Nawanshahr (Shahid Bhagat Singh Nagar)",
      "Pathankot",
      "Patiala",
      "Rupnagar",
      "Sahibzada Ajit Singh Nagar (Mohali)",
      "Sangrur",
      "Tarn Taran",
    ],
  },
  {
    state: "Rajasthan",
    statevalue: "rajasthan",
    districts: [
      "Ajmer",
      "Alwar",
      "Banswara",
      "Baran",
      "Barmer",
      "Bharatpur",
      "Bhilwara",
      "Bikaner",
      "Bundi",
      "Chittorgarh",
      "Churu",
      "Dausa",
      "Dholpur",
      "Dungarpur",
      "Hanumangarh",
      "Jaipur",
      "Jaisalmer",
      "Jalore",
      "Jhalawar",
      "Jhunjhunu",
      "Jodhpur",
      "Karauli",
      "Kota",
      "Nagaur",
      "Pali",
      "Pratapgarh",
      "Rajsamand",
      "Sawai Madhopur",
      "Sikar",
      "Sirohi",
      "Sri Ganganagar",
      "Tonk",
      "Udaipur",
    ],
  },
  {
    state: "Sikkim",
    statevalue: "sikkim",
    districts: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
  },
  {
    state: "Tamil Nadu",
    statevalue: "tamil_nadu",
    districts: [
      "Ariyalur",
      "Chennai",
      "Coimbatore",
      "Cuddalore",
      "Dharmapuri",
      "Dindigul",
      "Erode",
      "Kanchipuram",
      "Kanyakumari",
      "Karur",
      "Krishnagiri",
      "Madurai",
      "Nagapattinam",
      "Namakkal",
      "Nilgiris",
      "Perambalur",
      "Pudukkottai",
      "Ramanathapuram",
      "Salem",
      "Sivaganga",
      "Thanjavur",
      "Theni",
      "Thoothukudi (Tuticorin)",
      "Tiruchirappalli",
      "Tirunelveli",
      "Tiruppur",
      "Tiruvallur",
      "Tiruvannamalai",
      "Tiruvarur",
      "Vellore",
      "Viluppuram",
      "Virudhunagar",
    ],
  },
  {
    state: "Telangana",
    statevalue: "telangana",
    districts: [
      "Adilabad",
      "Bhadradri Kothagudem",
      "Hyderabad",
      "Jagtial",
      "Jangaon",
      "Jayashankar Bhoopalpally",
      "Jogulamba Gadwal",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Komaram Bheem Asifabad",
      "Mahabubabad",
      "Mahabubnagar",
      "Mancherial",
      "Medak",
      "Medchal",
      "Nagarkurnool",
      "Nalgonda",
      "Nirmal",
      "Nizamabad",
      "Peddapalli",
      "Rajanna Sircilla",
      "Rangareddy",
      "Sangareddy",
      "Siddipet",
      "Suryapet",
      "Vikarabad",
      "Wanaparthy",
      "Warangal (Rural)",
      "Warangal (Urban)",
      "Yadadri Bhuvanagiri",
    ],
  },
  {
    state: "Tripura",
    statevalue: "tripura",
    districts: [
      "Dhalai",
      "Gomati",
      "Khowai",
      "North Tripura",
      "Sepahijala",
      "South Tripura",
      "Unakoti",
      "West Tripura",
    ],
  },
  {
    state: "Uttarakhand",
    statevalue: "uttarakhand",
    districts: [
      "Almora",
      "Bageshwar",
      "Chamoli",
      "Champawat",
      "Dehradun",
      "Haridwar",
      "Nainital",
      "Pauri Garhwal",
      "Pithoragarh",
      "Rudraprayag",
      "Tehri Garhwal",
      "Udham Singh Nagar",
      "Uttarkashi",
    ],
  },
  {
    state: "Uttar Pradesh",
    statevalue: "uttar_pradesh",
    districts: [
      "Agra",
      "Aligarh",
      "Allahabad",
      "Ambedkar Nagar",
      "Amethi (Chatrapati Sahuji Mahraj Nagar)",
      "Amroha (J.P. Nagar)",
      "Auraiya",
      "Azamgarh",
      "Baghpat",
      "Bahraich",
      "Ballia",
      "Balrampur",
      "Banda",
      "Barabanki",
      "Bareilly",
      "Basti",
      "Bhadohi",
      "Bijnor",
      "Budaun",
      "Bulandshahr",
      "Chandauli",
      "Chitrakoot",
      "Deoria",
      "Etah",
      "Etawah",
      "Faizabad",
      "Farrukhabad",
      "Fatehpur",
      "Firozabad",
      "Gautam Buddha Nagar",
      "Ghaziabad",
      "Ghazipur",
      "Gonda",
      "Gorakhpur",
      "Hamirpur",
      "Hapur (Panchsheel Nagar)",
      "Hardoi",
      "Hathras",
      "Jalaun",
      "Jaunpur",
      "Jhansi",
      "Kannauj",
      "Kanpur Dehat",
      "Kanpur Nagar",
      "Kanshiram Nagar (Kasganj)",
      "Kaushambi",
      "Kushinagar (Padrauna)",
      "Lakhimpur - Kheri",
      "Lalitpur",
      "Lucknow",
      "Maharajganj",
      "Mahoba",
      "Mainpuri",
      "Mathura",
      "Mau",
      "Meerut",
      "Mirzapur",
      "Moradabad",
      "Muzaffarnagar",
      "Pilibhit",
      "Pratapgarh",
      "RaeBareli",
      "Rampur",
      "Saharanpur",
      "Sambhal (Bhim Nagar)",
      "Sant Kabir Nagar",
      "Shahjahanpur",
      "Shamali (Prabuddh Nagar)",
      "Shravasti",
      "Siddharth Nagar",
      "Sitapur",
      "Sonbhadra",
      "Sultanpur",
      "Unnao",
      "Varanasi",
    ],
  },
  {
    state: "West Bengal",
    statevalue: "west_bengal",
    districts: [
      "Alipurduar",
      "Bankura",
      "Birbhum",
      "Burdwan (Bardhaman)",
      "Cooch Behar",
      "Dakshin Dinajpur (South Dinajpur)",
      "Darjeeling",
      "Hooghly",
      "Howrah",
      "Jalpaiguri",
      "Kalimpong",
      "Kolkata",
      "Malda",
      "Murshidabad",
      "Nadia",
      "North 24 Parganas",
      "Paschim Medinipur (West Medinipur)",
      "Purba Medinipur (East Medinipur)",
      "Purulia",
      "South 24 Parganas",
      "Uttar Dinajpur (North Dinajpur)",
    ],
  },
];
