
$( document ).ready(function() {
    var skills = [ 'Microsoft Office', 'HTML', 'Javascript', 'Ionic', 'Angular', 'Requirements', 'Wordpress', 'CSS', 'SCSS', 'Parse', 'Angular', 'React.js' ];

    $('#skillsheader').click(function() { 
        
        // grab list
        var $list = $('#skillsleft ul');
        
        skills.forEach(function(value, index) {
            
            setTimeout(function() {
              $list.append('<li>' + value + '</li>');
            }, 1000);
            
        });
    });
});
 