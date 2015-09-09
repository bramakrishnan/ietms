<?php

/* @var $this yii\web\View */

//$this->title = 'My Yii Application';
?>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="img/slider1.jpg" alt="Chania">
    </div>

    <div class="item">
      <img src="img/slider2.jpg" alt="Chania">
    </div>

    <div class="item">
      <img src="img/slider3.jpg" alt="Flower">
    </div>

    <div class="item">
      <img src="img/slider4.jpg" alt="Flower">
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div class="index-wrapper">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src="img/300.jpg" alt="...">
                    <div class="caption">
                        <h3>Thumbnail label</h3>
                        <p>Content Content Content Content Content Content Content Content Content Content Content</p>
                        <p><a href="#" class="btn btn-primary" role="button">Button</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src="img/300.jpg" alt="...">
                    <div class="caption">
                        <h3>Thumbnail label</h3>
                        <p>Content Content Content Content Content Content Content Content Content Content Content</p>
                        <p><a href="#" class="btn btn-primary" role="button">Button</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src="img/300.jpg" alt="...">
                    <div class="caption">
                        <h3>Thumbnail label</h3>
                        <p>Content Content Content Content Content Content Content Content Content Content Content</p>
                        <p><a href="#" class="btn btn-primary" role="button">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
