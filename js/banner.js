/**
 * Created by admin on 2016/12/8.
 */

var imgturn = function(listId,ctrolId,obj){
    var father =this;
    $('#'+listId).append(document.getElementById(listId).innerHTML)// 首尾极限 拷贝一份
    this.player={
        play_list_all : $('#'+listId+' .banner-img'),//初始参与循环的 对象数组
        play_list:[],//当前展示的 对象数组
        play_dir:''//当前转换方向
    }
    this.all_len  = this.player.play_list_all.length;
    this.focus_index = 0; //记录当前 放大的对象 在原始数组 play_list_all里的位置
    this.will_focus;// 将要放大的 对象数字位置
    this.opts ={ //默认配置信息
        width:'400',
        autuoPlay:false,
        ctrol_area:false,
        self_ctrol:true
    }
    this.prev_animation =function(nub){
        var list = father.player.play_list_all;
        var n =    this.focus_index - nub;
        if(n>2){
            var now_prev_index =(this.focus_index+this.all_len-1)%this.all_len;
            var now_focus_index = this.focus_index;
            var now_next_index =(this.focus_index+this.all_len-0+1)%this.all_len;

            var will_prev_index = (nub+this.all_len-0-1)%this.all_len;
            var will_next_index = (nub+this.all_len-0+1)%this.all_len;

            $(list[now_prev_index]).show().animate({'left':1200+"px"},300,function(){$(this).hide()});
            $(list[now_focus_index]).removeClass('focus').animate({'left':1600+"px"},300,function(){$(this).hide()});
            $(list[now_focus_index]).find('img').animate({'left':0+'px','top':0+'px','width':394+'px','height':374+'px'},300);
            $(list[now_next_index]).animate({'left':2000+"px"},300,function(){$(this).hide()});

            $(list[will_prev_index]).css({'left':-1200+'px'}).show().animate({'left':0+'px'},300);
            $(list[nub]).addClass('focus').css({'left':-800+'px'}).show().animate({'left':400+'px'},300);
            $(list[nub]).find('img').animate({'left':-200+'px','top':-60+'px','width':800+'px','height':500+'px'},300);
            $(list[will_next_index]).css({'left':-400+'px'}).show().animate({'left':800+'px'},300);


            this.focus_index = nub;
            this.ctrol_focus(nub);
        }else if(n==2){
            var now_prev_index =(this.focus_index+this.all_len-1)%this.all_len;
            var now_focus_index = this.focus_index;
            var now_next_index =(this.focus_index+this.all_len-0+1)%this.all_len;

            var will_prev_index = (nub+this.all_len-0-1)%this.all_len;


            $(list[now_prev_index]).show().animate({'left':800+"px"},300);
            $(list[now_focus_index]).removeClass('focus').animate({'left':1200+"px"},300,function(){$(this).hide()});
            $(list[now_focus_index]).find('img').animate({'left':0+'px','top':0+'px','width':394+'px','height':374+'px'},300);
            $(list[now_next_index]).animate({'left':1600+"px"},300,function(){$(this).hide()});

            $(list[nub]).addClass('focus').css({'left':-400+'px'}).show().animate({'left':400+'px'},300);
            $(list[nub]).find('img').animate({'left':-200+'px','top':-60+'px','width':800+'px','height':500+'px'},300);

            $(list[will_prev_index]).css({'left':-800+'px'}).show().animate({'left':0+'px'},300);

            this.focus_index = nub;
            this.ctrol_focus(nub);
        }else{

            var now_prev_index =(this.focus_index+this.all_len-1)%this.all_len;
            var now_focus_index = this.focus_index;
            var now_next_index =(this.focus_index+this.all_len-0+1)%this.all_len;
            var will_prev_index = (this.focus_index+this.all_len-2)%this.all_len;

            $(list[now_next_index]).animate({'left':1200+"px"},300,function(){$(this).hide()});
            $(list[now_focus_index]).removeClass('focus').animate({'left':800+"px"},300);
            $(list[now_focus_index]).find('img').animate({'left':0+'px','top':0+'px','width':394+'px','height':374+'px'},300);

            $(list[now_prev_index]).addClass('focus').show().animate({'left':400+"px"},300);
            $(list[now_prev_index]).find('img').animate({'left':-200+'px','top':-60+'px','width':800+'px','height':500+'px'},300);

            $(list[will_prev_index]).css({'left':-400+'px'}).show().animate({'left':0},300);

            this.focus_index = now_prev_index;
            this.ctrol_focus(now_prev_index);
        }

    }
    this.next_animation =function(nub){
        var list = father.player.play_list_all;
        var n =    nub - this.focus_index;
        if(n>2){
            var now_prev_index =(this.focus_index+this.all_len-1)%this.all_len;
            var now_focus_index = this.focus_index;
            var now_next_index =(this.focus_index+this.all_len-0+1)%this.all_len;

            var will_prev_index = (nub+this.all_len-0-1)%this.all_len;
            var will_next_index = (nub+this.all_len-0+1)%this.all_len;


            $(list[now_prev_index]).animate({'left':-1200+"px"},300,function(){$(this).hide()});

            $(list[now_focus_index]).removeClass('focus').animate({'left':-800+"px"},300,function(){$(this).hide()});
            $(list[now_focus_index]).removeClass('focus').find('img').animate({'left':0+'px','top':0+'px','width':394+'px','height':374+'px'},300);

            $(list[now_next_index]).animate({'left':-400+"px"},300,function(){$(this).hide()});



            $(list[will_prev_index]).css({'left':1200+'px'}).show().animate({'left':0+'px'},300);

            $(list[nub]).addClass('focus').css({'left':1600+'px'}).show().animate({'left':400+'px'},300);
            $(list[nub]).find('img').animate({'left':-200+'px','top':-60+'px','width':800+'px','height':500+'px'},300);

            $(list[will_next_index]).css({'left':2000+'px'}).show().animate({'left':800+'px'},300);

            this.focus_index = nub;
            this.ctrol_focus(nub);
        }
        else if(n==2){

            var now_prev_index =(this.focus_index+this.all_len-1)%this.all_len;
            var now_focus_index = this.focus_index;
            var now_next_index =(this.focus_index+this.all_len-0+1)%this.all_len;

            var will_next_index = (nub+this.all_len-0+1)%this.all_len;


            $(list[now_prev_index]).animate({'left':-800+"px"},300,function(){$(this).hide()});

            $(list[now_focus_index]).removeClass('focus').animate({'left':-400+"px"},300,function(){$(this).hide()});
            $(list[now_focus_index]).removeClass('focus').find('img').animate({'left':0+'px','top':0+'px','width':394+'px','height':374+'px'},300);

            $(list[now_next_index]).animate({'left':0+"px"},300);
            $(list[nub]).addClass('focus').css({'left':1200+'px'}).show().animate({'left':400+'px'},300);
            $(list[nub]).find('img').animate({'left':-200+'px','top':-60+'px','width':800+'px','height':500+'px'},300);

            $(list[will_next_index]).css({'left':1600+'px'}).show().animate({'left':800+'px'},300);

            this.focus_index = nub;
            this.ctrol_focus(nub);
        }else{

            var now_prev_index =(this.focus_index+this.all_len-1)%this.all_len;
            var now_focus_index = this.focus_index;
            var now_next_index =(this.focus_index+this.all_len-0+1)%this.all_len;
            var will_next_index = (this.focus_index+this.all_len-0+2)%this.all_len;

            $(list[now_next_index]).addClass('focus').animate({'left':400+"px"},300);
            $(list[now_next_index]).find('img').animate({'left':-200+'px','top':-60+'px','width':800+'px','height':500+'px'},300);
            $(list[now_focus_index]).animate({'left':0+"px"},300);
            $(list[now_focus_index]).removeClass('focus').find('img').animate({'left':0+'px','top':0+'px','width':394+'px','height':374+'px'},300);
            $(list[now_prev_index]).animate({'left':-400+"px"},300,function(){$(this).hide()});

            $(list[will_next_index]).css({'left':1200+'px'}).show().animate({'left':800+'px'},300);

            this.focus_index = now_next_index;
            this.ctrol_focus(now_next_index);
        }

    }
    this.focus_obj=function(nub){ //确定焦点对象
        if(nub > this.focus_index){
            this.next_animation(nub);
        }else if(nub < this.focus_index){
            this.prev_animation(nub);
        }else {
            return ;
        }
    }
    this.play=function(){
        if(this.will_focus <  this.focus_index){
            this.prev_animation();
        }else if(this.will_focus > this.focus_index){

        }else{
            return ;
        }
    }
    this.bind_event =function(){ //绑定焦点事件
        $('.nextbtn').click(function(){

            father.next_animation(father.focus_index-0+1)// 向后展示
            father.play();
        })
        $('.prevbtn').click(function(){
            father.prev_animation(father.focus_index-0-1)// 向前展示
            father.play();
        })
        $('#'+ctrolId+' .banner-img').each(function(index){
            $(this).attr('tabindex',index);
            $(this).click(function(){
                var nub = $(this).attr('tabindex');
                father.focus_obj(nub);
            })
        })
    }
    this.ctrol_focus=function(n){
        n = n%(this.all_len/2);
        $('#'+ctrolId+' .focus').removeClass('focus');
        $('#'+ctrolId+' .banner-img').get(n).className='banner-img focus';
    }
    this.int= function(){ //初始化
        this.player.play_list[0] = this.player.play_list_all[this.player.play_list_all.length-1];
        this.player.play_list[1] = this.player.play_list_all[0];
        this.player.play_list[2] = this.player.play_list_all[1];
        $(this.player.play_list[1]).addClass('focus');
        $('#'+listId).find('.banner-img').hide();
        $(this.player.play_list).each(function(index){
            $(this).css({'left':400*index+"px"}).show();
            $('#'+listId).append(this);
        })
    }
    this.int();
    this.bind_event();
    father.focus_obj(1);
}