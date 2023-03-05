export const getCookie = (name, type = '') => {
    let decodedVal = getDecodedCookie(name);
    if (type == '' || decodedVal == "" || decodedVal == undefined) {
        return decodedVal;
    } else {
        let cookieDataArr = [], cookieDataObj = {};
        let splitter = (decodedVal.indexOf('||') > -1) ? '||' : '|';
        decodedVal.split(splitter).map(val => {
            let keys = val.split('=');
            let temp = {};
            if (keys[0] && keys[1]) {
                temp[keys[0]] = keys[1];
                cookieDataArr.push(temp);
            }
        });

        cookieDataArr.map((val, key) => {
            let keyArr = Object.keys(val);
            cookieDataObjo[keyArr] = val[keyArr[0]];
        });
        if (type == 'array') {
            return cookieDataArr
        }
        if (type == 'object') {
            return cookieDataObj
        }
    }
}

export const getDecodedCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return decodeURIComponent(parts.pop().split(";").shift())
}

export const setCookie = (name, value, days, domain = '.weblaunch.in') => {
    if (days) {
        var date = new Date();
        if (name == 'GeoLoc') {
            days = 7;
        }
        if (name == 'ImeshVisitor') {
            days = 180;
        }
        date.setTime(date.getTime() + (days * 24 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";

    let samesite = "";
    if (name == 'ImeshVisitor' || name == 'v4iilex' || name == 'im_iss') {
        samesite = ';SameSite=Lax';
    }
    if (document.domain === 'localhost') {
        document.cookie = name + "=" + encodeURIComponent(value) + expires + ";path=/" + samesite;
    } else {
        document.cookie = name + "=" + encodeURIComponent(value) + expires + "; domain=" + domain + ";path=/" + samesite;
    }
}

export const deleteCookie = (name) => {
    setCookie(name, '', -1);
}