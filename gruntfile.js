module.exports = grunt => {
    grunt.initConfig({
        exec: {
            build: "emcc src/main.c -O3 -s USE_WEBGL2=1 -s FULL_ES3=1 -s USE_GLFW=3 -s WASM=1 -o build/index.html"
        },

        watch: {
            cpp: {
                files: ["src/*.c", "src/*.h"],
                tasks: ["exec:build"]
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks("grunt-exec")

    grunt.registerTask("default", ["watch"])
}
