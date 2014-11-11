define(function(){
	var instance = null;

	function AssetManager(){
		if(instance !== null){
			throw new Error("Cannot instantiate more than one AssetManager, use AssetManager.getInstance()");
		} 

		this.initialize();
	}
	AssetManager.prototype = {
		initialize: function(){
			this.basePath = 'app/assets';
		},
		get : function(file) {
			return this.basePath + '/' + file;
		}
	};
	AssetManager.getInstance = function(){
				// summary:
				//      Gets an instance of the singleton. It is better to use 
				if(instance === null){
					instance = new AssetManager();
				}
				return instance;
	};

	return AssetManager.getInstance();
});