function navMenu()
{
    var menu = '<section id="upper-nav">	\
        <div class="row"> \
            <div id="upper-nav-links"> \
                <ul> \
                <li><a href="#" id="change_to_chinese">中文</a></li> \
                <li><a href="#" id="change_to_english">ENGLISH</a></li> \
                <li><a href="#">博客</a></li> \
                </ul> \
            </div> \
        </div> \
</section> \
<nav id="main-nav" class="row"> \
                <div id="logo" class="columns" style="width:33%"> \
    	<a href=""><img src="img/logo_o2ee.png" alt="Formstack Online Form Builder"></a> \
    </div> \
            <div id="site-links" class="columns" style="width:42%"> \
    	<ul class="nav-bar" id="mobile-submenu"> \
            <li class="has-flyout" style="display: inline;"><a href="index.cn.html">首页</a> \
            	<ul style="display: none;" class="flyout"> \
                <li><a href="#">论坛</a></li> \
                </ul> \
            </li>  \
            <li class="has-flyout" style="display: inline;"><a href="#">智能物联</a> \
            	<ul style="display: none;" class="flyout"> \
                <li><a href="#">监控管理系统</a></li> \
                     \
                <!-- <li><a href="#">百科</a></li> \
                <li><a href="#">BUG管理</a></li> --> \
                </ul> \
            </li> \
            <li class="has-flyout" style="display: inline;"><a href="#">充电桩</a> \
            	<ul style="display: none;" class="flyout"> \
                <li><a href="#">交流桩</a></li> \
                <li><a href="#">直流桩</a></li> \
                </ul> \
            </li> \
   			<li><a href="#">商务合作</a></li> \
		</ul> \
    </div> \
    <div id="trial-login" class="three columns"> \
        <a href="#" class="button orange login">物联网</a> \
        <a href="#" class="button green trial">新能源</a> \
 	</div> \
</nav>';
    document.getElementById("header").innerHTML=menu;
}