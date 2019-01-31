module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            parallax_hero: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                    noCache: true
                },
                files: {
                    'parallax-hero.css': 'scss/parallax-hero.scss',
                }
            },
        },

        watch: {
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass:parallax_hero'],
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass','watch']);

};