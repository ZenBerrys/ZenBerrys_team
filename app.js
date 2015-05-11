(function() {
    return {
        /*requests: {
            getTotalTickets: function(requester_id){
                url: '/api/v2/users/' + requester_id + '/tickets/requested.json',
                type: 'GET',
                dataType: 'json'
            }
        },*/
        
        events: {
            'app.activated': 'getRequesterData'            
        },
        
        getRequesterData: function() {
            var requester_id = this.ticket().requester().id();
            /*this.ajax('getTotalTickets', requester_id)
                .done(function(data) {
                    console.dir(data);
            });*/
        }
        
    };
}());
