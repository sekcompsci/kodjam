import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { Icon, Card } from 'antd';
const { Meta } = Card;

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function SimpleList(props) {
  const { classes } = props;
  return (
    <div style={{ width: '100%', backgroundColor: '#ECECEC', marginTop: '10vh', marginBottom: '10vh', zIndex: -1 }}>
      <div className={classes.root} style={{ maxWidth: 'none' }}>
        <List component="nav">
          <ListItem >
            <ListItemText><h2>โปรโฟล์</h2></ListItemText>
          </ListItem>
          <ListItem button>
            <Card
              hoverable
               style={{ width: '100%', height:'50%',margin:'5vh'}}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Apo"
              />
            </Card>
          </ListItem>
          <ListItem button>
            <Card
              hoverable
               style={{ width: '100%', height:'50%',margin:'5vh'}}
              cover={<img alt="example" src="https://fbi.dek-d.com/27/0563/1878/123177926" />}
            >
              <Meta
                title="Mine-Sek"
              />
            </Card>
          </ListItem>
          <ListItem button>
            <Card
              hoverable
               style={{ width: '100%', height:'50%',margin:'5vh'}}
              cover={<img alt="example" src="http://www.carl-f-bucherer.com/sites/default/files/2016-03/johnwick_premiere_02.jpg" />}
            >
              <Meta
                title="Big Boss"
              />
            </Card>
          </ListItem>
        </List>
      </div>
      <div style={{ width: '100%', height: '2vh' }} />
      <div className={classes.root} style={{ maxWidth: 'none' }}>
        <ListItem >
          <ListItemText><h2>โลเคชัน</h2></ListItemText>
        </ListItem>
        <List component="nav">
          <ListItem button>
            <Card
              hoverable
               style={{ width: '100%', height:'50%',margin:'5vh'}}
              cover={<img alt="example" src="http://123.242.145.13/media/big/76357" />}
            >
              <Meta
                title="ตลาดริมน้ำคลองบางพระ"
                description="เป็นสถานที่จำหน่ายอาหารพื้นบ้านเมืองตราด อยู่ติดคลองบางพระ ด้านหลังวัดโยธานิมิต ซึ่งเป็นวิถีชีวิตดั้งเดิมของคนเมืองตราด ผู้มาเที่ยวชมตลาดริมน้ำ 
                ยังสามารถแวะสักการะศาลสมเด็จพระเจ้าตากสินมหาราชที่ตั้งอยู่ ณ วัดโยธานิมิต และชมโบราณ โบราณวัตถุ ภายในวัดได้อีกด้วย"
              />
            </Card>
          </ListItem>
          <ListItem button>
            <Card
              hoverable
               style={{ width: '100%', height:'50%',margin:'5vh'}}
              cover={<img alt="example" src="http://123.242.145.13/media/big/118397"/>}
            >
              <Meta
                title="ประติมากรรมรูปสิงห์"
                description="ประติมากรรมรูปสิงห์ ชนิดหินทราย ศิลปะเขมรโบราณแบบนครวัด อายุราวพุทธศตวรรษที่ 16 . สูง 131 ซ.ม. กว้าง 37 ซ.ม. ยาว 75 ซ.ม.
                ประติมากรรมรูปสิงห์คู่นี้นับว่ามีสภาพสมบูรณ์มาก ถือเป็นสัญลักษณ์ประจำสถาบันโรงเรียนเบญจมราชูทิศ จังหวัดจันทบุรี เนื่องจากเป็นสิ่งที่อยู่คู่กับโรงเรียนมายาวนาน คาดว่านาจะมีมาตั้งแต่อาคารเรียนหลักแรก
                ประติมากรรมสิงห์ที่มีลักษณะเดียวกันนี้ ยังมีอยู่หน้าโบสถ์เก่าวัดทองทั่ว แต่มีสภาพชำรุด สึกกร่อนไปตามกาลเวลา"
              />
            </Card>
          </ListItem>
          <ListItem button>
            <Card
              hoverable
               style={{ width: '100%', height:'50%',margin:'5vh'}}
              cover={<img alt="example" src="http://123.242.145.13/media/big/116561" />}
            >
              <Meta
                title="วัดโคกสูง"
                description="วัดโคกสูง สร้างขึ้นเมื่อปี พ.ศ.2471ได้รับวิสุงคามสีมา เมื่อปี พ.ศ.2472 
                เป็นสถานที่ประกอบศาสนกิจในวันสำคัญทางพระพุทธศาสนา และเป็นที่ตั้งศูนย์ศึกษาพระพุทธศาสนาวันอาทิตย์"
              />
            </Card>
          </ListItem>
        </List>

      </div>
      <div style={{ width: '100%', height: '2vh' }} />
      <div className={classes.root} style={{ maxWidth: 'none' }}>
        <ListItem >
          <ListItemText><h2>ไทม์ไลน์ และ รีวิว</h2></ListItemText>
        </ListItem>
        <List component="nav">
          <ListItem button>
            <Card
              hoverable
               style={{ width: '100%', height:'50%',margin:'5vh'}}
              cover={<img  alt="example" src="http://123.242.145.13/media/big/451673" />}
            >
              <Meta
                title="เดินเล่นที่หมู่บ้านหนองสะไน"
                description="ไปหาปลาที่บึงนี้แล้วเจอสะไนในบึงสะไน ... "
              />
            </Card>
          </ListItem>
          <ListItem button>
            <Card
              hoverable
               style={{ width: '100%', height:'50%',margin:'5vh'}}
              cover={<img alt="example" src="http://123.242.145.13/media/big/547146" />}
            >
              <Meta
                title="ไปไหว้พระที่วัดศิริพัฒนารามกันมั้ยจ๊ะ"
                description="ได้ปล่อยนกปล่อยปลา มีความสุขจัง อิอิ ..."
              />
            </Card>
          </ListItem>
          <ListItem button>
            <Card
              hoverable
              style={{ width: '100%', height:'50%',margin:'5vh'}}
              cover={<img alt="example" src="http://123.242.145.13/media/big/445631" />}
            >
              <Meta
                title="งานประเพณีแห่ปราสาทผึ้งและแข่งขันเรือยาว"
                description="งานนี้สนุกมาก นายพลาดแล้วที่ไม่ได้มา ..."
              />
            </Card>
          </ListItem>
        </List>

      </div>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);