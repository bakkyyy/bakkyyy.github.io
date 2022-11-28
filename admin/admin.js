const { createApp } = Vue

createApp({
    data() {
        return {
            arPlayers: null,
            maintext: null,
            className: 'lel',
        }
    },

    methods: {
        showResult(data) {
            this.arPlayers = data.trim().split('\n');
            this.maintext = this.arPlayers[0];
        },

        clear() {

            $.ajax({
                method: "POST",
                url: "ajax.php",
                data: {
                    action: 'clear',
                },
                success: function (data) {

                    console.log('success clear');

                }
            });
        },
    },

    mounted() {

        var _ = this;
        setInterval(
            () => {

                $.ajax({
                    method: "GET",
                    url: "file/result.txt",
                    dataType: 'text',
                    success: function (data) {
                        _.showResult(data);
                    }
                });
            },
            300
        );
    }

}).mount('#admin')