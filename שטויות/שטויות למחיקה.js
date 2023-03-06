nav.navbar {
    background: teal;
    color: white;

    a {
        padding: 16px;
        display: inline-block;
        cursor: pointer;
        text-decoration: none;
        color: white;

        &:hover {
            background-color: #ffffff56;
        }
    }

    .navActive {
        background-color: #ffffff47;
    }
}
   [hidden] {
       display: none !important;

   }
    nav.sidebar {
    background-color: #3c3c3c;
    color: black;
    width: 250px;
    position: absolute;
    right: -250px;
    /* פחות הגובה של התפריט העליון */
    height: calc(100% - 59px);
    transition: 0.6s;
    z-index: 9999;

    &.open {
        right: 0;
    }

    a {
        padding: 16px;
        display: block;
        cursor: pointer;
        text-decoration: none;
        color: white;
        border-bottom: 1px solid #6c6c6c;

        &:hover {
            background-color: #ffffff56;
        }
        i{
            width: 20px;
        }
    }

    .navActive {
        background-color: #ffffff47;
    }
}

.container {
    cursor: pointer;
    margin: 9px;
    float: right;
}

.bar1,
.bar2,
.bar3 {
    width: 25px;
    height: 4px;
    background-color: white;
    margin: 7px 0;
    transition: 0.4s;
}

.open .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}

.open .bar2 {
    opacity: 0;
}

.open .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}