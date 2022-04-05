const router = require('express').Router();
const { Doctor } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newDoctor = await Doctor.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const doctorData = await Doctor.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!doctorData) {
      res.status(404).json({ message: 'No doctor found with this id!' });
      return;
    }

    res.status(200).json(doctorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
