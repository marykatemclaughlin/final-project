function com()
        {
            let e = document.getElementById("p1zodiac").value;
            let f = document.getElementById("p2zodiac").value;

            if ((e == "Aries" && f == "Aries") || (e == "Taurus" && f == "Taurus") || (e == "Gemini" && f == "Gemini") || (e == "Cancer" && f == "Cancer") ||
            (e == "Leo" && f == "Leo") || (e == "Virgo" && f == "Virgo") || (e == "Libra" && f == "Libra") || (e == "Scorpio" && f == "Scorpio") ||
            (e == "Sagittarius" && f == "Sagittarius") || (e == "Capricorn" && f == "Capricorn") || (e == "Aquarius" && f == "Aquarius") || (e == "Pisces" && f == "Pisces"))
            {
                document.getElementById("print").innerHTML = "50% Compatible";
                document.getElementById("statement").innerHTML = e + " and " + f + " could go either way. Compatible element, but incompatible modality. Very similar, but their similarity might also be their downfall.";
            }
            else if ((e == "Aries" && f == "Taurus") || (e == "Aries" && f == "Scorpio") || (e == "Aries" && f == "Virgo") || (e == "Aries" && f == "Pisces") ||
            (e == "Taurus" && f == "Gemini") || (e == "Taurus" && f == "Libra") || (e == "Taurus" && f == "Aries") || (e == "Taurus" && f == "Sagittarius") ||
            (e == "Gemini" && f == "Capricorn") || (e == "Gemini" && f == "Taurus") || (e == "Gemini" && f == "Cancer") || (e == "Gemini" && f == "Scorpio") ||
            (e == "Cancer" && f == "Auarius") || (e == "Cancer" && f == "Gemini") || (e == "Cancer" && f == "Leo") || (e == "Cancer" && f == "Sagittarius") ||
            (e == "Leo" && f == "Pisces") || (e == "Leo" && f == "Cancer") || (e == "Leo" && f == "Capricorn") || (e == "Leo" && f == "Virgo") ||
            (e == "Virgo" && f == "Libra") || (e == "Virgo" && f == "Aquarius") || (e == "Virgo" && f == "Aries") || (e == "Virgo" && f == "Leo") ||
            (e == "Libra" && f == "Taurus") || (e == "Libra" && f == "Virgo") || (e == "Libra" && f == "Scorpio") || (e == "Libra" && f == "Pisces") ||
            (e == "Scorpio" && f == "Libra") || (e == "Scorpio" && f == "Gemini") || (e == "Scorpio" && f == "Aries") || (e == "Scorpio" && f == "Sagittarius") ||
            (e == "Sagittarius" && f == "Cancer") || (e == "Sagittarius" && f == "Scorpio") || (e == "Sagittarius" && f == "Capricorn") || (e == "Sagittarius" && f == "Taurus") ||
            (e == "Capricorn" && f == "Aquarius") || (e == "Capricorn" && f == "Gemini") || (e == "Capricorn" && f == "Aries") || (e == "Capricorn" && f == "Sagittarius") ||
            (e == "Aquarius" && f == "Capricorn") || (e == "Aquarius" && f == "Virgo") || (e == "Aquarius" && f == "Cancer") || (e == "Aquarius" && f == "Pisces") ||
            (e == "Pisces" && f == "Aries") || (e == "Pisces" && f == "Leo") || (e == "Pisces" && f == "Libra") || (e == "Pisces" && f == "Aquarius"))
            {
                document.getElementById("print").innerHTML = "30% Compatible";
                document.getElementById("statement").innerHTML = e + " and " + f + " are not the best together. Incompatible element, but compatible modality.";

            }
            else if ((e == "Aries" && f == "Gemini") || (e == "Aries" && f == "Sagittarius") || (e == "Aries" && f == "Aquarius") || (e == "Aries" && f == "Leo") ||
            (e == "Taurus" && f == "Capricorn") || (e == "Taurus" && f == "Virgo") || (e == "Taurus" && f == "Cancer") || (e == "Taurus" && f == "Pisces") ||
            (e == "Gemini" && f == "Libra") || (e == "Gemini" && f == "Aquarius") || (e == "Gemini" && f == "Aries") || (e == "Gemini" && f == "Leo") ||
            (e == "Cancer" && f == "Scorpio") || (e == "Cancer" && f == "Pisces") || (e == "Cancer" && f == "Taurus") || (e == "Cancer" && f == "Virgo") ||
            (e == "Leo" && f == "Sagittarius") || (e == "Leo" && f == "Aries") || (e == "Leo" && f == "Libra") || (e == "Leo" && f == "Gemini") ||
            (e == "Virgo" && f == "Capricorn") || (e == "Virgo" && f == "Taurus") || (e == "Virgo" && f == "Scorpio") || (e == "Virgo" && f == "Cancer") ||
            (e == "Libra" && f == "Aquarius") || (e == "Libra" && f == "Gemini") || (e == "Libra" && f == "Leo") || (e == "Libra" && f == "Sagittarius") ||
            (e == "Scorpio" && f == "Cancer") || (e == "Scorpio" && f == "Pisces") || (e == "Scorpio" && f == "Capricorn") || (e == "Scorpio" && f == "Virgo") ||
            (e == "Sagittarius" && f == "Aries") || (e == "Sagittarius" && f == "Leo") || (e == "Sagittarius" && f == "Libra") || (e == "Sagittarius" && f == "Aquarius") ||
            (e == "Aquarius" && f == "Libra") || (e == "Aquarius" && f == "Gemini") || (e == "Aquarius" && f == "Aries") || (e == "Aquarius" && f == "Sagittarius") ||
            (e == "Pisces" && f == "Cancer") || (e == "Pisces" && f == "Scorpio") || (e == "Pisces" && f == "Capricorn") || (e == "Pisces" && f == "Taurus"))
            {
                document.getElementById("print").innerHTML = "80% Compatible";
                document.getElementById("statement").innerHTML = e + " and " + f + " work well together. Both element and modality are compatible.";
            }
            else if ((e == "Aries" && f == "Cancer") || (e == "Aries" && f == "Capricorn") || (e == "Libra" && f == "Capricorn") || (e == "Libra" && f == "Cancer") ||
            (e == "Cancer" && f == "Aries") || (e == "Cancer" && f == "Libra") || (e == "Capricorn" && f == "Aries") || (e == "Capricorn" && f == "Libra") ||
            (e == "Taurus" && f == "Aquarius") || (e == "Taurus" && f == "Leo") || (e == "Scorpio" && f == "Aquarius") || (e == "Scorpio" && f == "Leo") ||
            (e == "Leo" && f == "Taurus") || (e == "Leo" && f == "Scorpio") || (e == "Aquarius" && f == "Taurus") || (e == "Aquarius" && f == "Scorpio") ||
            (e == "Virgo" && f == "Gemini") || (e == "Virgo" && f == "Sagittarius") || (e == "Pisces" && f == "Gemini") || (e == "Pisces" && f == "Sagittarius") ||
            (e == "Gemini" && f == "Virgo") || (e == "Gemini" && f == "Pisces") || (e == "Sagittarius" && f == "Virgo") || (e == "Sagittarius" && f == "Pisces"))
            {
                document.getElementById("print").innerHTML = "15% Compatible";
                document.getElementById("statement").innerHTML = e + " and " + f + " are not good together. Incompatible element and modality.";
            }
            else if ((e == "Aries" && f == "Libra") || (e == "Libra" && f == "Aries") || (e == "Cancer" && f == "Capricorn") || (e == "Capricorn" && f == "Cancer") ||
            (e == "Taurus" && f == "Scorpio") || (e == "Scorpio" && f == "Taurus") || (e == "Aquarius" && f == "Leo") || (e == "Leo" && f == "Aquarius") ||
            (e == "Virgo" && f == "Pisces") || (e == "Pisces" && f == "Virgo") || (e == "Gemini" && f == "Sagittarius") || (e == "Sagittarius" && f == "Gemini"))
            {
                document.getElementById("print").innerHTML = "50% Compatible";
                document.getElementById("statement").innerHTML = e + " and " + f + " are sister signs. Compatible element, but incompatible modality. An 'opposites attract' cliche.";
            }
        }
