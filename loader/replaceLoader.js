module.exports = function(){
    return this.query.name.charAt(0).toUpperCase() + this.slice(1);
}