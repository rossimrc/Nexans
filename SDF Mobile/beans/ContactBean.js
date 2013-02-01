/**
 * Constructor description
 * @author Thiago Cavalari
 * @param messageType, original java type String
 * @param message, original java type String
 * @param from, original java type String
 * @param name, original java type String
 * @param company, original java type String
 * @class
 * Class ContactBean
 */
function ContactBean()
{
	this.messageType	= null;
	this.message		= null;
	this.from			= null;
	this.name			= null;
	this.company		= null;	
}

/**
 * Method description
 * @param Not Params
 * @return The from value
 */
ContactBean.prototype.getFrom = function() {
    return this.from;
};

/**
 * Method description
 * @param from
 * @return {null}
 */
ContactBean.prototype.setFrom = function(from) {
    this.from = from;
};

/**
 * Method description
 * @param Not Params
 * @return The message value
 */
ContactBean.prototype.getMessage = function() {
    return this.message;
};

/**
 * Method description
 * @param from
 * @return {null}
 */
ContactBean.prototype.setMessage = function(message) {
    this.message = message;
};

/**
 * Method description
 * @param Not Params
 * @return The messageType value
 */
ContactBean.prototype.getMessageType = function() {
    return this.messageType;
};

/**
 * Method description
 * @param messageType
 * @return {null}
 */
ContactBean.prototype.setMessageType = function(messageType) {
    this.messageType = messageType;
};

/**
 * Method description
 * @param Not Params
 * @return The company value
 */
ContactBean.prototype.getCompany = function() {
    return this.company;
};

/**
 * Method description
 * @param company
 * @return {null}
 */
ContactBean.prototype.setCompany = function(company) {
    this.company = company;
};

/**
 * Method description
 * @param Not Params
 * @return The name value
 */
ContactBean.prototype.getName = function() {
    return this.name;
};

/**
 * Method description
 * @param name
 * @return {null}
 */
ContactBean.prototype.setName = function(name) {
    this.name = name;
};