<template>
  <div class="picBox">
    dsad
	<vue-preview :slides="details" class="、" style="display:inline-block;"></vue-preview>
</div>
</template>

<script>
export default {
  name:'HelloWorld11111xxxss',
    data() {
        return {
           details: [
            {
src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
msrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
w: 600,
h: 400
}, {
src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
msrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
w: 600,
h: 400
}, {
src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
msrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
w: 600,
h: 400
}, {
src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
msrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
w: 600,
h: 400
},
            
           ],
        };
    },
    methods: {
    //     async getThirdHaikEventList(val) {
		// 	const params = {
		// 		v: "v1.0",
		// 		type: 8008,
		// 		start: this.pageNumPhoto ? this.pageNumPhoto : '0',
		// 		limit: '12',
		// 		deviceIndexCode: val,
		// 		beginTime: startTime,
		// 		endTime: endTime,
		// 	};
    //         let data = await this.$http.get('/bi/elevatorMonitor/getThirdHaikEventList', { params });
    //         if (data && Object.keys(data).length) {
		// 		data.list.forEach(item => {
		// 			item.w = 600;   //设置以大图浏览时的宽度
    //                 item.h = 400;     //设置以大图浏览时的高度
    //                 item.src = item.imageUrl;  //大图
    //                 item.msrc = item.imageUrl;  //小图
		// 		})
		// 		this.details = data.list;
		// 		this.totalPhoto = data.total;
    //         }
		// },
    },  
};
</script>
