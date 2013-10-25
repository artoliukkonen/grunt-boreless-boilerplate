define(['backbone', 'underscore', 'handlebars', 'text!./task.html', 'module'],
	function(Backbone, _, Handlebars, template, module) {	
	return Backbone.View.extend({
		template: Handlebars.compile(template),
		
		initialize: function() {
			// Bind to the collection that must have been given as an init parameter
			//console.log('Bind event handlers');
			this.model.on({
				'all': _.bind(this.render, this)
			});
			
			return this;
		},
		
		render: function() {
			// Render the template into a HTML
			// TODO This is slow and can be optimized
			var context = { model: this.model.toJSON() },
				html = this.template(context);
			
			// Replace the element contents
			this.$el.html(html);
			
			return this;
		}
	});
});