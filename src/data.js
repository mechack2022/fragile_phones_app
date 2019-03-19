const ProductStore =[
    {
        id:1,
        title:"Apple IPhone X",
        company:"Apple",
        price:"314,000",
        img:"productImages/1.jpg",
        info:`"Screen: 5.8 OLED HD Retina Display
            Memory: 3GB RAM ,256GB ROM
            CPU: A11 Bionic Chip with 64-bit architecture
            Operating System: iOS 11
            Camera: 12MP wide-angle and telephoto cameras, 7MP TrueDepth front camera
            Battery: Up to 21 hours talk time" , Megapixels:12.0`,
        inCart:false,
        count:0,
        total:0
    },
    {
        id:2,
        title:"Apple IPhone 8Plus",
        company:"Apple",
        price:"289,760",
        img:"/productImages/2.jpg",
        info:`5.5-inch (diagonal) widescreen LCD multi-touch display with IPS technology and Retina HD display
            12MP wide-angle and telephoto cameras, Optical image stabilization and Six‑element lens
            All new glass design with A color‑matched, aerospace‑grade aluminum band
            Splash, water, and dust resistant
            4K video recording at 24 fps, 30 fps, or 60 fps `,
        inCart:false,
        count:0,
        total:0
    },
    {        
        id:3,
        title:"Infinix Note 5 (X604)",
        company:"Infinix",
        price:"56,850",   
        img:"productImages/3.jpg",
        info:` 6.0 Inch HD Display
            32 GB Storage, MicroSD up to 128 GB
            3 GB RAM, Octa-core 2.0 GHz CPU
            12 MP Back Camera, 16 MP Front Camera
            Android One OS
            Li-Ion 4500mAh Battery
            Dual SIM 
            4G Network , Gaming enthusiasts`,
        inCart:false,
        count:0,
        total:0 
    },
    {
        id:4,
        title:"Infinix Hot 6x (X623)",
        company:"Infinix",
        price:" 60,000",   
        img:"productImages/4.jpg",
        info:` 
            Infinix
            Infinix Hot 6x (X623)- 
            Dual Sim, 6.2-Inch HD+( 3GB RAM, 32GB ROM) ,
            face Unlock /fingerprint, 13MP / 2MP + 8MP Selfie Camera,
            4000 MAh Battery - Champagne Gold `,
        inCart:false,
        count:0,
        total:0  

    },
    { 
        id:5,
        title:"Infinix Smart 2 (X5515)",
        company:"Infinix",
        price:"60,000",   
        img:"productImages/5.jpg",
        info:` 
            Display: 5.5 Inches HD+ (1440 x 720 pixels)
            CPU: Quad-core 1.5 GHz
            Memory: 1GB RAM, 16GB ROM, expandable with 128GB
            OS: Android 8.1 Oreo
            Camera: 13MP Primary; 8MP Secondary
            Battery: 3,050 mAh
            3G/4G Speed: HSPA, HSPA+LTE `,
        inCart:false,
        count:0,
        total:0    
    },
    {
        id:6,
        title:"Tecno spark 2 ",
        company:"Tecno",
        price:"46,200",   
        img:"../productImages/6.jpg",
        info:` Tecno Tecno Spark 2 (KA7),
             -16+1GB -Android 8.1 Go Edition -3500mAh 
             Li-Polymer Battery`,
        inCart:false,
        count:0,
        total:0
    },
    {
        
        id:7,
        title:"Tecno Camon 11 (CF7K)",
        company:"Teco",
        price:"64,000",   
        img:"../productImages/7.jpg",
        info:` Display: 6.2-Inch FHD
            CPU: Quad Core 1.5GHz
            Memory: 64GB RAM + 4GB ROM
            Camera: 13MP + 2MP Dual Rear + 16MP Front
            Operating System: Android 8.1 Oreo
            Fingerprint & Face ID`,
        inCart:false,
        count:0,
        total:0    
    },
    {
        id:8,
        title:"Tecno CAMON X (CA7)",
        company:"Tecno",
        price:"50,250",   
        img:"productImages/8.jpg",
        info:` Tecno CAMON X (CA7) With 20mp Camera For Super Selfie 32GB ROM 
            + 3GB Ram Super Speeder Designed With Style That Suits You, 
            4G LTE, 3750 MAH Battery, Midnight Black. `,
        inCart:false,
        count:0,
        total:0  
    },
    {
        
        id:9,
        title:"Gionee S8s Black,",
        company:"Gionee",
        price:"45,500",   
        img:"productImages/9.jpg",
        info:`Display Size : 5.86inches
            OS : Android 9.0 (Android Pie) 
            Resolution : HD (1520*720)
            Camera : Rear 13MP AF + 5MP FF. Selfie 8MP FF
            Flash : Rear Dual Flash 
            Battery : 3000 mAh
            Memory : RAM 3GB + ROM 32GB
            Connectivity : GSM/WCDMA/TDD - LTE/FDD - LTE
            Triple Card Slot (2nano Sims + Tcard) 
            USB - Type C cable
            OS : Android 9.0(Android Pie) 
            CPU : MT 6762 Octacore 2.0GHz
            Fingerprint ID
            15 months warranty 
            Dimensions : 149.1*71.65*8.75mm
            Weight : 167.5g
            Colour : Black and Gold `,
            inCart:false,
            count:0,
            total:0 

    },
    {  
        id:10,
        title:"Samsung Galaxy S10 Plus",
        title:"Gionee S10 LITE",
        company:"Gionee",
        price:"49,860",   
        img:"productImages/10.jpg",
        info:` 5.2 Inch HD Screen, 1280*720 Pixel
            Qualcomm Snapdragon 427 1.4GHz Quad Core
            Support Touch ID
            Support Face ID
            4GB RAM + 32GB ROM
            13 MP Back Camera + 16 MP Front Camera
            3100mAh Battery`,
            inCart:false,
            count:0,
            total:0 
    },
    {  
        id:11,
            title:"Samsung Galaxy S10 Plus",
            company:"Samsung",
            price:"352,000",   
            img:"productImages/11.jpg",
            info:` 6.4inches Dynamic AMOLED capacitive touchscreen, 16M colors
                Android 9.0 (Pie); One UI
                Exynos 9820 Octa (8 nm)
                Octa-core (2x2.7 GHz Mongoose M4 & 2x2.3 GHz Cortex-A75 & 4x1.9 GHz Cortex-A55)
                128 GB, 8GB RAM，microSD, up to 512 GB (uses SIM 2 slot)
                12 MP, f/1.5-2.4, 26mm (wide), 1/2.55", 1.4µm, Dual Pixel PDAF, OIS
                12 MP, f/2.4, 52mm (telephoto), 1/3.6", 1.0µm, AF, OIS, 2x optical zoom
                16 MP, f/2.2, 12mm (ultrawide)
                Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer, heart rate, SpO2
                Non-removable Li-Ion 4100 mAh battery `,
                inCart:false,
                count:0,
                total:0
        },
        {  
                id:12,
                title:"Samsung Galaxy S8 Edge",
                company:"Samsung",
                price:"113,900",   
                img:"productImages/12.jpg",
                info:` Hello my friend,welcome to our store， we wanna to become the first-rate service and quality seller in jumiaour store is
                opening this week，so we decide to give everybody a big discount only this week
                This Certified  product has been tested and certified to work and look like new, so this S8 is definitely good quality. 
                Accessories may be generic and not directly from the manufacturer. 
                Screen Size:5.8, 
                ROM (internal storage):64,
                Operating System:Android`,
                inCart:false,
                count:0,
                total:0
            }
        
    

]
 const ProductDetails = {
    id:13,
    title:"Samsung Galaxy S10 Plus",
    company:"Samsung",
    price:"352,000",   
    img:"productImages/11.jpg",
    info:` 6.4inches Dynamic AMOLED capacitive touchscreen, 16M colors
        Android 9.0 (Pie); One UI
        Exynos 9820 Octa (8 nm)
        Octa-core (2x2.7 GHz Mongoose M4 & 2x2.3 GHz Cortex-A75 & 4x1.9 GHz Cortex-A55)
        128 GB, 8GB RAM，microSD, up to 512 GB (uses SIM 2 slot)
        12 MP, f/1.5-2.4, 26mm (wide), 1/2.55", 1.4µm, Dual Pixel PDAF, OIS
        12 MP, f/2.4, 52mm (telephoto), 1/3.6", 1.0µm, AF, OIS, 2x optical zoom
        16 MP, f/2.2, 12mm (ultrawide)
        Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer, heart rate, SpO2
        Non-removable Li-Ion 4100 mAh battery `,
        inCart:false,
        count:0,
        total:0

 }

export {ProductStore,ProductDetails}