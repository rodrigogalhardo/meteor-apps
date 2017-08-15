ServiceConfiguration.configurations.upsert({ service: "facebook" }, {
    $set: {
        appid: "",
        secret: ""
    }
});