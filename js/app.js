const { createApp } = Vue

createApp({
    data() {
        return {
            name: null,
            countClick: 0,
            date: null,
            isRefresh: false,
            isAjax: false,
            randomPhrase: null,
            buttonText: 'Нажми на меня',
            arNames: ['Женя', 'Рамиль', 'Глеб', 'Диана'],
            arSwear: [' даунич', ' свинья', ' мразь', ' животное', ' быдло', ' чертила', ' иди нахуй', ' соболезную', ' нюхай писю', ' сосать', ' я тебя люблю'],
        }
    },
    computed: {
        checkInput() {
            return this.name;
        },
    },

    methods: {

        buttonClick() {
            this.countClick ++;
            this.date = new Date();

            if (this.countClick > 0 && !this.isRefresh)
            {
                console.log('refresh');
                this.isRefresh = true;
                this.refresh();
            }
            this.changeText(this.countClick);

            if (!this.isAjax)
            {
                this.isAjax = true;
                $.ajax({
                    method: "POST",
                    url: "admin/ajax.php",
                    data: {
                        name: this.name,
                        time: this.date
                    }
                }).done(function () {

                    console.log('ajax is done');
                });
            }
        },

        refresh() {
            window.setTimeout(() => {
                console.log('refreshed');
                this.countClick = 0;
                this.isRefresh = false;
                this.isAjax = false;
                this.buttonText = 'Нажми на меня';
            }, 5000)
        },

        changeText(click) {

            switch (click) {
                case 1:
                    this.buttonText = 'Не нажимай';
                    break;
                case 2:
                    this.buttonText = 'Не нажимай, сука';
                    break;
                case 3:
                    this.buttonText = 'Ты тупой?';
                    break;
                case 4:
                    this.buttonText = 'Мне больно';
                    break;
                case 5:
                    this.buttonText = 'Хватит, пожалуйста';
                    break;
                case 7:
                    this.buttonText = 'Ладно, мне нравится';
                    break;
                case 10:
                    this.buttonText = 'Продолжай';
                    break;
                case 12:
                    this.buttonText = 'Ещё';
                    break;
                case 15:
                    this.buttonText = 'Сильнее';
                    break;
                case 18:
                    this.buttonText = 'Глубже';
                    break;
                case 21:
                    this.buttonText = 'Нажми, если ' + this.name + ' сосет хуй';
                    break;
            }
        }
    },

    mounted() {
        var random_n = this.arNames[Math.floor(Math.random() * this.arNames.length)],
            random_s = this.arSwear[Math.floor(Math.random() * this.arSwear.length)];
        this.randomPhrase = random_n + random_s;

    }
}).mount('#app')