const Post = require("./database/models/post_model");
const Image = require("./database/models/image_model")


async function seedPosts(req, res) {

    const samplePosts = [
        {
            title: "Test Post 1",
            body: "scoody woop this is a test body! Wowie it certainly is very impressive and well thought out",
            draft: false
        },
        {
            title: "Test Post 2",
            body: "scoody woop this is a test body as well and it's totally different! Wowie it certainly is very impressive and well thought out",
            draft: false
        }
          
    ];

    for (post of samplePosts) {
        await Post.create(post)
    }

    const posts = await Post.find();
    res.json(posts)
}


function seedImages(req, res) {

    const sampleImages = [
        {
            caption: "this is a very pretty lady/ferret",
            url: "https://uca7d4801ed76eb3f00f68604a9f.previews.dropboxusercontent.com/p/thumb/AAqoi8ryneNo8vjLVrRHPzOJzvEFI6Napee9hQuVyMZ3Ye-vMyvJ42akYdoZ4JVNZ1CqWdhSCqOGzKujhpjOeCBK83bgfm2xICTKDMsEbsCRyo0igys0m5K_wZKzak1rpXSqZGKPIVldlOfcMge5WFAPyfr-AGdrcYldLGqq4WbOs_s1m-zF6cD3bvLn2CzNd54mALXSGPUnRDNlQsAa5h4MgirMHfREvMSgzpJdsHdsFymHcqsv7HJSebsPAJCWrNX0N56C0O27uM_CJ6oqk2-iWej-7-3cJOWcQtvBtOZBC42T5TxjOi_TvhpQtgDgrD7bReHgraM-NyhNXzXaUWxqmlZzO2g9-U7_zGzVB7769A/p.jpeg?fv_content=true&size_mode=5"
        },
        {
            caption: "look at this good good phoot",
            url: "https://uc88bd5f32d8ec716c5cce244a0d.previews.dropboxusercontent.com/p/thumb/AAqUe-wjE5_hLGVq3ojCZhZuc97qpRhaz37WSP4tzgqLQ4uR_v4ay1S-xADZHF7fcQteuOX4iFVtDrig-iwut-p52jSM-yU31085D_Y3l-3IEI2a0ZWNU0kkM9LJK5tXJRb5GDqUbX_MaL614IuW5TnPdJ-s0OM9eLdIb0kmCNBJDPHnYl_SUw7OYsDyQ8nrzJWdrRfnI5iNomNsquRj1PWjGMahwKhFFlQ-IIiDL6nOWcEJph2lq-SfxdKzmZJGJbsM2UGtH9eLRhtvDMyI8VwJ_P9U_5ZRIsD1cv0t4lJmE4nHZQzyK20KDRfTI9Sh5za7wjkp7bPYSBUA_-_qjcarYmZhL-PHyIo_wDqoeORqPg/p.jpeg?fv_content=true&size_mode=5"
        }
    ]

    for (image of sampleImages) {
        let newImage = new Image(image);
        newImage.save();
    }

    res.send("Images seeded!")
}

module.exports = {
    seedPosts,
    seedImages
}