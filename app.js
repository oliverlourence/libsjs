import Liloo from './assets/liloo/liloo.js'

axios.post('./bin/model.php', {
    firstName: 'Santos',
    lastName: 'Dumont'
})
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });

