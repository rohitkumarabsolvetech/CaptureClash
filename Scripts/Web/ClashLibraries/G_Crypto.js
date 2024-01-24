
const supabase_key =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0YmRocXdhZnZtaGF1Y3ZrZndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5OTc0NzQsImV4cCI6MjAxOTU3MzQ3NH0.fuLEZWkK5vj9AJaClHEF3V-9wiAN7WbIJsXugKDUc18";
var Version = "1.0",
  G_Crypto = (function (e) {
    var n = new TextEncoder().encode("abcdefghijklmnopqrstuvwxyz012345$GAURAVROHIT");
    return {
      encrypt: function e(r) {
        for (
          var o = new TextEncoder().encode(r),
            t = new Uint8Array(o.length),
            a = 0;
          a < o.length;
          a++
        )
          t[a] = o[a] ^ n[a % n.length];
        return btoa(String.fromCharCode(...t));
      },
      decrypt: function e(r) {
        for (
          var o = Uint8Array.from(atob(r), (e) => e.charCodeAt(0)),
            t = new Uint8Array(o.length),
            a = 0;
          a < o.length;
          a++
        )
          t[a] = o[a] ^ n[a % n.length];
        return new TextDecoder().decode(t);
      },
      Version: Version,
    };
  })(jQuery);

  
function getTimeDifference(e) {
  let n = new Date(e),
    r = new Date() - n;
  for (let o of [
    { name: "year", duration: 31536e6 },
    { name: "month", duration: 2592e6 },
    { name: "day", duration: 864e5 },
    { name: "hour", duration: 36e5 },
    { name: "minute", duration: 6e4 },
    { name: "second", duration: 1e3 },
  ]) {
    let t = Math.floor(r / o.duration);
    if (t > 0) {
      if ("day" === o.name && t < 2) return "1 day ago";
      return `${t} ${o.name}${t > 1 ? "s" : ""} ago`;
    }
  }
  return "Just now";
}
const ajaxRequest = (url, method, data, successCallback, errorCallback, key) => {
  const settings = {
    url,
    method,
    data: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
      apikey: key !== null && key !== undefined ? key : supabase_key,
      Authorization: "Bearer " +  key !== null && key !== undefined ? key : supabase_key,
    },
  };
  $.ajax(settings).done(successCallback).fail(errorCallback);
};